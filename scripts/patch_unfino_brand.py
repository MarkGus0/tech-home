from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8')
repls={
"潮汐 TIDEHACK 2026 | 青岛青年黑客松":"未完场 UNFINO · 潮汐 TIDEHACK 2026 | 青岛青年黑客松",
"潮汐 TIDEHACK 2026 · 执行版 v0.1":"潮汐 TIDEHACK 2026 · 未完场 UNFINO 执行版 v0.1",
"潮汐 TIDEHACK 2026 · 合作伙伴版 v0.1":"潮汐 TIDEHACK 2026 · 未完场 UNFINO 合作伙伴版 v0.1",
"('主办方','待定（项目组 / 联合发起方）')":"('主办方','TechFlows 社区旗下子品牌「未完场 UNFINO」')",
"主办/发起方：待定":"主办/发起方：TechFlows 社区旗下子品牌「未完场 UNFINO」",
}
for a,b in repls.items():
    if a not in s: print('missing:',a)
    s=s.replace(a,b)
p.write_text(s,encoding='utf-8')
print('brand replacements complete')
