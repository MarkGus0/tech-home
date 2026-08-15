from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8')
s=s.replace("font(p.add_run('TIDEHACK'),34,accent,True)", "font(p.add_run('UNFINO'),34,accent,True)")
p.write_text(s,encoding='utf-8')
print('logo patched')
