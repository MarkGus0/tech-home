from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8')
repls={
"未完场 UNFINO · 潮汐 TIDEHACK 2026 | 青岛青年黑客松":"未完场 UNFINO 2026 | 青岛青年黑客松",
"青岛青年黑客松完整策划书":"未完场 UNFINO 2026 完整策划书",
"潮汐 TIDEHACK 2026 · 未完场 UNFINO 执行版 v0.1":"未完场 UNFINO 2026 · 执行版 v0.1",
"青岛青年黑客松对外合作方案":"未完场 UNFINO 2026 对外合作方案",
"潮汐 TIDEHACK 2026 · 未完场 UNFINO 合作伙伴版 v0.1":"未完场 UNFINO 2026 · 合作伙伴版 v0.1",
"潮汐 TIDEHACK 2026 青岛青年黑客松":"未完场 UNFINO 2026",
"潮汐 TIDEHACK 2026":"未完场 UNFINO 2026",
"TIDEHACK 2026":"未完场 UNFINO 2026",
"青岛潮汐TIDEHACK2026_完整策划书.docx":"未完场UNFINO2026_完整策划书.docx",
"青岛潮汐TIDEHACK2026_对外合作方案.docx":"未完场UNFINO2026_对外合作方案.docx",
}
for a,b in repls.items():
    if a not in s: print('missing:',a)
    s=s.replace(a,b)
p.write_text(s,encoding='utf-8')
print('activity and filenames patched')
