from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8')
s=s.replace("t=d.add_table(rows=1,cols=len(heads)); t.alignment=WD_TABLE_ALIGNMENT.CENTER; t.autofit=False; widths(t,w); header_repeat(t.rows[0])", "t=d.add_table(rows=1,cols=len(heads)); t.alignment=WD_TABLE_ALIGNMENT.CENTER; t.autofit=False; widths(t,w)")
p.write_text(s,encoding='utf-8')
print('patched', 'header_repeat(t.rows[0])' not in s)
