import os
import re
import json
from html.parser import HTMLParser

class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = set()
        self.skip = False
    
    def handle_starttag(self, tag, attrs):
        if tag in ['script', 'style']:
            self.skip = True
        for name, value in attrs:
            if name == 'placeholder' and value:
                val = value.strip()
                if val: self.texts.add(val)
                
    def handle_endtag(self, tag):
        if tag in ['script', 'style']:
            self.skip = False
            
    def handle_data(self, data):
        if not self.skip:
            val = data.strip()
            if val:
                self.texts.add(val)

parser = MyParser()
files = [
    'index.html', 'home.html', 'search.html', 'my_albums.html', 
    'storage.html', 'payment.html', 'profile.html', 'photo_edit.html', 
    'video_edit.html', 'album_view.html', 'storage_purchase.html', 
    'view_summer_list.html', 'view_tokyolive_list.html'
]

basedir = r'c:\Users\naoki\OneDrive\デスクトップ\Antigravity\MY Album_prototype_2_jp_en'

for f in files:
    path = os.path.join(basedir, f)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            # remove html comments
            content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
            parser.feed(content)

# Filter out ascii only (to keep mostly Japanese texts)
# Also filter out pure numbers and simple punctuation
jp_texts = [t for t in parser.texts if not re.match(r'^[A-Za-z0-9\s()\[\]{}:;.,!?-]*$', t)]

print(json.dumps(list(jp_texts), ensure_ascii=False, indent=2))
