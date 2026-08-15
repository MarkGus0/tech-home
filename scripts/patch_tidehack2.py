from pathlib import Path
p=Path(r'C:\Users\ASUS\Documents\官网\scripts\build_tidehack_plan.py')
s=p.read_text(encoding='utf-8')
old="        h(d,day,2); table(d,['时间','环节','说明'],rows,[1.2,1.5,4.85],TEAL,8.2)"
new="        if day.startswith('DAY 2') or day.startswith('DAY 3'): d.add_page_break()\n        h(d,day,2); table(d,['时间','环节','说明'],rows,[1.2,1.5,4.85],TEAL,8.2)"
if old not in s: raise SystemExit('pattern not found')
s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
print('patched day page breaks')
