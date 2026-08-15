from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8').replace('未完场UNFINO2026_完整策划书.docx','未完场 UNFINO 2026_完整策划书.docx').replace('未完场UNFINO2026_对外合作方案.docx','未完场 UNFINO 2026_对外合作方案.docx')
p.write_text(s,encoding='utf-8')
print('filenames patched with spaces')
