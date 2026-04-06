import os
import re

base_dir = r"C:\Users\naoki\OneDrive\デスクトップ\Antigravity\MY Album_prototype_1"

FILES_TO_MOD = [
    os.path.join(base_dir, "home.html"),
    os.path.join(base_dir, "view_tokyolive_list.html"),
    os.path.join(base_dir, "view_summer_list.html")
]

common_injection = """
    <!-- Tipping Flow Modals Common -->
    <style>
        .tipping-modal { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%) translateY(100%); width: 100%; max-width: 430px; background: #FFF; border-radius: 24px 24px 0 0; padding: 24px 20px calc(var(--nav-height, 80px) + 20px); z-index: 200; transition: 0.3s cubic-bezier(0.1, 0.8, 0.2, 1); box-shadow: 0 -10px 40px rgba(0,0,0,0.1); }
        .tipping-modal.show { transform: translateX(-50%) translateY(0); }
        .amount-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px; }
        .amount-btn { background: #FFF; border: 2px solid #FFEDDF; color: #444; font-size: 14px; font-weight: 800; padding: 12px 0; border-radius: 12px; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .amount-btn:active { background: #FFEDDF; transform: scale(0.95); }
        .free-amount-wrap { display: flex; align-items: center; gap: 8px; background: #F8F9FB; padding: 8px 12px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.05); }
        .free-amount-input { flex: 1; border: none; background: transparent; font-size: 16px; font-weight: 800; outline: none; text-align: right; color: #333; }
        .submit-free { padding: 10px 20px; background: var(--primary-color, #FF6B00); color: #FFF; border: none; border-radius: 10px; font-weight: 900; cursor: pointer; }
        .submit-free:active { opacity: 0.8; }

        .dmc-pay-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0A0A0A; z-index: 300; display: none; flex-direction: column; opacity: 0; transition: 0.3s; color: #FFF; }
        .dmc-pay-screen.show { display: flex; opacity: 1; }
        .dmc-header { padding: 20px; font-size: 20px; font-weight: 900; text-align: center; border-bottom: 1px solid #222; letter-spacing: 2px; }
        .dmc-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
        .dmc-amount { font-size: 44px; font-weight: 900; color: #00E676; margin-top: 10px; text-shadow: 0 0 20px rgba(0,230,118,0.3); }
        .dmc-pay-btn { background: #00E676; color: #111; font-size: 18px; font-weight: 900; padding: 18px 40px; border-radius: 30px; border: none; cursor: pointer; width: 100%; max-width: 300px; margin-bottom: 20px; transition: 0.2s; box-shadow: 0 8px 24px rgba(0,230,118,0.3); }
        .dmc-pay-btn:active { transform: scale(0.95); box-shadow: 0 4px 12px rgba(0,230,118,0.2); }
        .dmc-cancel-btn { background: transparent; color: #888; border: none; font-size: 14px; font-weight: 800; padding: 10px; cursor: pointer; }

        .complete-popup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); background: #FFF; width: 90%; max-width: 340px; border-radius: 28px; padding: 36px 24px 28px; z-index: 400; display: none; flex-direction: column; align-items: center; text-align: center; opacity: 0; transition: 0.3s cubic-bezier(0.1, 0.8, 0.2, 1); box-shadow: 0 24px 48px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.05); }
        .complete-popup.show { display: flex; opacity: 1; transform: translate(-50%, -50%) scale(1); }
        .cp-icon { font-size: 56px; margin-bottom: 20px; animation: bounce 1s ease infinite; line-height: 1; }
        .cp-title { font-size: 20px; font-weight: 900; color: #333; margin-bottom: 12px; }
        .cp-desc { font-size: 14px; font-weight: 600; color: #666; margin-bottom: 28px; line-height: 1.5; }
        .cp-close-btn { background: #F0F2F5; color: #333; font-size: 15px; font-weight: 900; padding: 14px 32px; border-radius: 16px; border: none; cursor: pointer; transition: 0.2s; width: 100%; }
        .cp-close-btn:active { background: #E4E6E9; }
        
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        .overlay-tipping { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 150; display: none; opacity: 0; transition: 0.3s; backdrop-filter: blur(2px); }
        .overlay-tipping.show { display: block; opacity: 1; }
    </style>

    <div class="overlay-tipping" id="tippingOverlay" onclick="closeTippingFlow()"></div>
    <div class="tipping-modal" id="amountModal">
        <div style="width: 40px; height: 4px; background: #E0E0E0; border-radius: 2px; margin: 0 auto 16px;"></div>
        <div style="font-size: 16px; font-weight: 900; margin-bottom: 20px; text-align: center; color: #333;">応援する金額を選択</div>
        <div class="amount-grid">
            <button class="amount-btn" onclick="selectAmount(50)">50円</button>
            <button class="amount-btn" onclick="selectAmount(100)">100円</button>
            <button class="amount-btn" onclick="selectAmount(300)">300円</button>
            <button class="amount-btn" onclick="selectAmount(500)">500円</button>
            <button class="amount-btn" onclick="selectAmount(1000)">1000円</button>
            <button class="amount-btn" onclick="selectAmount(5000)">5000円</button>
            <button class="amount-btn" onclick="selectAmount(10000)">10000円</button>
        </div>
        <div class="free-amount-wrap">
            <input type="number" id="freeAmount" placeholder="自由入力" class="free-amount-input">
            <span style="font-size: 14px; font-weight: 800; color:#333;">円</span>
            <button class="submit-free" onclick="submitFreeAmount()">決定</button>
        </div>
    </div>

    <div class="dmc-pay-screen" id="dmcPayScreen">
        <div class="dmc-header">DMC PAY</div>
        <div class="dmc-body">
            <div style="font-size: 14px; color: #aaa; margin-bottom: 8px;">お支払い金額</div>
            <div class="dmc-amount" id="dmcAmountText">0円</div>
            <div style="margin-top: 40px; width: 100%; display: flex; flex-direction: column; align-items: center;">
                <button class="dmc-pay-btn" onclick="processDmcPay()">決済する</button>
                <button class="dmc-cancel-btn" onclick="closeDmcPay()">キャンセル</button>
            </div>
        </div>
    </div>

    <div class="complete-popup" id="completePopup">
        <div class="cp-icon">🎉</div>
        <div class="cp-title">投げ銭が完了しました！</div>
        <div class="cp-desc">クリエイターへの応援ありがとうございます。</div>
        <button class="cp-close-btn" onclick="closeTippingFlow()">閉じる</button>
    </div>

    <script>
        let selectedTippingAmount = 0;

        function openTipping(e) {
            if(e) e.stopPropagation();
            document.getElementById('tippingOverlay').classList.add('show');
            document.getElementById('amountModal').classList.add('show');
        }

        function closeTippingFlow() {
            document.getElementById('tippingOverlay').classList.remove('show');
            document.getElementById('amountModal').classList.remove('show');
            document.getElementById('completePopup').classList.remove('show');
            document.getElementById('freeAmount').value = '';
        }

        function selectAmount(amount) {
            selectedTippingAmount = amount;
            showDmcPay();
        }

        function submitFreeAmount() {
            const val = document.getElementById('freeAmount').value;
            if(val && parseInt(val) > 0) {
                selectedTippingAmount = parseInt(val);
                showDmcPay();
            } else {
                alert("金額を正しく入力してください");
            }
        }

        function showDmcPay() {
            document.getElementById('amountModal').classList.remove('show');
            document.getElementById('tippingOverlay').classList.remove('show');
            document.getElementById('dmcAmountText').innerText = selectedTippingAmount.toLocaleString() + '円';
            document.getElementById('dmcPayScreen').classList.add('show');
        }

        function closeDmcPay() {
            document.getElementById('dmcPayScreen').classList.remove('show');
        }

        function processDmcPay() {
            const btn = document.querySelector('.dmc-pay-btn');
            btn.innerText = '決済中...';
            btn.style.opacity = '0.7';
            setTimeout(() => {
                btn.innerText = '決済する';
                btn.style.opacity = '1';
                document.getElementById('dmcPayScreen').classList.remove('show');
                document.getElementById('tippingOverlay').classList.add('show');
                document.getElementById('completePopup').classList.add('show');
            }, 1000);
        }
    </script>
"""

# HTML adjustments to view_tokyolive_list.html and view_summer_list.html
script_replace_lists = r'''
            const itemHtml = `
                <div class="li-item" onclick="${linkTarget}">
                    <div class="li-thumb-wrap">
                        <img src="images/${data.img}">
                        <div class="li-badge">${badgeIcon} ${badgeText}</div>
                    </div>
                    <div class="li-body">
                        <div class="li-title">${i + 1}. ${data.title}</div>
                        <div class="li-actions" onclick="event.stopPropagation()">
                            <button class="li-btn" onclick="toggleVolume(this)">
                                <span style="font-size:16px;">🔊</span>
                                <span class="count">${likesCount}</span>
                            </button>
                            <button class="li-btn tipping-btn" style="background:#FFF0E6; color:#FF6B00; border-color:rgba(255,107,0,0.3);" onclick="openTipping(event)">
                                <span style="font-size:14px;">🎁</span>
                                <span>投げ銭</span>
                            </button>
                            <button class="li-btn share-btn" onclick="openShare()">
                                <span style="font-size:14px;">🔗</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
'''

for file in FILES_TO_MOD:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    # Append common mod
    if "<!-- Tipping Flow Modals Common -->" not in content:
        # insert before <script src="nav.js"></script> and </body>
        content = content.replace("</body>", f"{common_injection}\n</body>")

    if file.endswith("list.html"):
        # modify the template literal
        old_template_pattern = re.compile(r"const itemHtml = `[\s\S]*?`;")
        # Ensure 'toggleVolume' uses .count or just replaces likesCount correctly
        content = old_template_pattern.sub(script_replace_lists.strip(), content)

        # Update toggleVolume script logic if `.countSpan` class isn't expected
        # Change `const countSpan = btn.querySelectorAll('span')[1];` to `.querySelector('.count')`
        content = content.replace("const countSpan = btn.querySelectorAll('span')[1];", "const countSpan = btn.querySelector('.count');")

    else:
        # home.html modifications
        # Add CSS
        if ".c-action-btn" not in content:
            style_injection = """
        .c-action-btn { background: #F0F2F5; border: none; display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 800; color: #666; cursor: pointer; padding: 6px 10px; border-radius: 10px; transition: 0.2s; }
        .c-action-btn.active { color: #FFF; background: #FF3B30; }
        .c-action-btn.tipping-btn { background: #FFF0E6; color: #FF6B00; border: 1px solid rgba(255,107,0,0.2); margin-left: auto; }
        .c-action-btn.tipping-btn:active { background: #FFD5B8; }
        """
            content = content.replace("</style>", f"{style_injection}\n    </style>")
            
            # replace layout
            content = content.replace(".c-stats { display: flex; gap: 12px; font-size: 11px; font-weight: 800; color: var(--text-sub); }", ".c-stats { display: flex; gap: 8px; font-size: 11px; font-weight: 800; color: var(--text-sub); width: 100%; align-items: center; }")
            content = content.replace(".c-bottom-row { display: flex; justify-content: space-between; align-items: center; }", ".c-bottom-row { display: flex; justify-content: space-between; align-items: center; gap: 8px; }")
            
            # also, we should add toggleVolume inside home.html
            js_injection = """
        function toggleVolume(btn) {
            btn.classList.toggle('active');
            const countSpan = btn.querySelector('.count');
            if(!countSpan) return;
            let val = countSpan.innerText;
            if(val.includes('k')) {
                let current = parseFloat(val);
                countSpan.innerText = (btn.classList.contains('active') ? (current + 0.1).toFixed(1) : (current - 0.1).toFixed(1)) + 'k';
            } else {
                let current = parseInt(val);
                countSpan.innerText = btn.classList.contains('active') ? current + 1 : current - 1;
            }
        }
"""
            content = content.replace("function switchTab", f"{js_injection}\n        function switchTab")
            
            # regex replace the spans inside c-stats
            # e.g. <span>🔊 1.2k</span> <span>👁️ 3.4k</span> <span>📥 89</span>
            def replacer(m):
                vol_val = m.group(1)
                eye_val = m.group(2)
                return f'<button class="c-action-btn" onclick="toggleVolume(this); event.stopPropagation();">🔊 <span class="count">{vol_val}</span></button><button class="c-action-btn tipping-btn" onclick="openTipping(event)">🎁 投げ銭</button> <span style="display:flex; align-items:center; gap:4px; font-size:11px; margin-left:8px;">👁️ {eye_val}</span>'
            
            # Using regex to find <span>🔊 {val}</span> <span>👁️ {val}</span> <span>📥 {val}</span>
            content = re.sub(r'<span>🔊 (.*?)</span>\s*<span>👁️ (.*?)</span>\s*<span>📥 (.*?)</span>', replacer, content)

    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated perfectly.")
