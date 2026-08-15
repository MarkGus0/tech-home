from PIL import Image, ImageOps, ImageDraw
from pathlib import Path
for name, folder in [('internal','C:/Users/ASUS/Documents/官网/docs/qa_internal_v3'),('external','C:/Users/ASUS/Documents/官网/docs/qa_external_v3')]:
    paths=sorted(Path(folder).glob('page-*.png'), key=lambda p:int(p.stem.split('-')[1]))
    ims=[]
    for p in paths:
        im=Image.open(p).convert('RGB')
        im.thumbnail((360,510))
        canvas=Image.new('RGB',(380,550),'white')
        x=(380-im.width)//2; y=25
        canvas.paste(im,(x,y))
        d=ImageDraw.Draw(canvas); d.text((10,5),p.stem,fill='black')
        ims.append(canvas)
    cols=3; rows=(len(ims)+cols-1)//cols
    sheet=Image.new('RGB',(cols*380,rows*550),(225,230,235))
    for i,im in enumerate(ims): sheet.paste(im,((i%cols)*380,(i//cols)*550))
    out=Path(folder)/(name+'_contact.png'); sheet.save(out)
    print(out, sheet.size, len(ims))
