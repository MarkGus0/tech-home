from docx import Document
p=r'C:\Users\ASUS\Documents\官网\docs\青岛潮汐TIDEHACK2026_完整策划书.docx'
d=Document(p)
for i,t in enumerate(d.tables):
    rows=[]
    for r in t.rows:
        rows.append(' | '.join(c.text for c in r.cells))
    if any('时间 | 环节 | 说明'==x for x in rows) or (rows and rows[0].startswith('时间 | 环节')):
        print('TABLE',i,'rows',len(rows))
        for j,x in enumerate(rows): print(j,repr(x))
