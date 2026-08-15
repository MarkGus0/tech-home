from PIL import Image, ImageDraw
from pathlib import Path
for name,folder in [('internal','C:/Users/ASUS/Documents/官网/docs/qa_name_internal'),('external','C:/Users/ASUS/Documents/官网/docs/qa_name_external')]:
    paths=sorted(Path(folder).glob('page-*.png'),key=lambda p:int(p.stem.split('-')[1])); ims=[]
    for p in paths:
        im=Image.open(p).convert('RGB'); im.thumbnail((360,510)); c=Image.new('RGB',(380,550),'white'); c.paste(im,((380-im.width)//2,25)); ImageDraw.Draw(c).text((10,5),p.stem,fill='black'); ims.append(c)
    cols=3; rows=(len(ims)+2)//3; sheet=Image.new('RGB',(cols*380,rows*550),(225,230,235))
    for i,im in enumerate(ims): sheet.paste(im,((i%3)*380,(i//3)*550))
    out=Path(folder)/(name+'_contact.png'); sheet.save(out); print(out)
