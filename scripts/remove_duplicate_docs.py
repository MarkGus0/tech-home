from pathlib import Path
root=Path(r'C:\Users\ASUS\Documents\官网').resolve()
for name in ['青岛潮汐TIDEHACK2026_完整策划书.docx','青岛潮汐TIDEHACK2026_对外合作方案.docx','未完场UNFINO2026_完整策划书.docx','未完场UNFINO2026_对外合作方案.docx']:
    p=(root/'docs'/name).resolve()
    assert str(p).startswith(str(root)+"\\")
    if p.exists(): p.unlink()
print('old duplicate artifacts removed; canonical spaced filenames retained')
