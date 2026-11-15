import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('report loader uses canonical shared feedback service', () => {
  assert.match(html, /<script src="https:\/\/onholdlab\.com\/js\/feedback\.js" defer><\/script>/);
  assert.doesNotMatch(html, /https:\/\/onholdlab\.github\.io\/js\/feedback\.js/);
});
test('oversize report is explained and retained without submitting', () => {
  const handler = html.split('rE("#rs").onclick=()=>{')[1].split('// ===== 結算卡片')[0];
  const elements = {'#rm':{style:{},textContent:''},'#rq':{value:'-1'},'#rn':{value:'字'.repeat(2001)},'#rk':{value:'其他'},'#rs':{disabled:false}};
  let calls=0;
  const context = {rE:s=>elements[s],S:{qs:[],sub:''},rptN:0,window:{OHLFeedback:{}},OHLFeedback:{send:()=>{calls++;return Promise.resolve({ok:true})}},gc:()=>{},setTimeout:()=>{},rpm:{}};
  vm.runInNewContext('rE("#rs").onclick=()=>{' + handler,context);
  elements['#rs'].onclick();
  assert.equal(calls,0);
  assert.match(elements['#rm'].textContent,/2,000/);
  assert.equal(elements['#rn'].value.length,2001);
  assert.equal(elements['#rs'].disabled,false);
});
