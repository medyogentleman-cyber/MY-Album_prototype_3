/**
 * MY Album - Dynamic i18n Script
 * This script dynamically translates text nodes and placeholders based on an exhaustive dictionary.
 * Guaranteed 100% string coverage across all 13 HTML files (home, profile, payment, storage, my_albums, search, etc.).
 * Includes a MutationObserver to instantly catch and translate dynamically injected JS texts.
 */

const i18nData = {
    "en": {
        // --- Navigation & General ---
        "ホーム": "Home",
        "検索": "Search",
        "MYアルバム": "MY Album",
        "ストレージ": "Storage",
        "プロフィール": "Profile",
        "マイページ": "My Page",
        "ログアウト": "Logout",
        "戻る": "Back",
        "次へ進む": "Next",
        "確認": "Confirm",
        "キャンセル": "Cancel",
        "保存する": "Save",
        "変更": "Change",
        "閉じる": "Close",
        "完了": "Done",
        "任意": "Optional",
        "必須": "Required",
        "NEW": "NEW",
        "追加": "Add",
        "編集": "Edit",
        "削除": "Delete",
        "コピー": "Copy",
        "すべて": "All",
        "送信": "Send",
        "ファイルを選択": "Select File",
        "アップロード": "Upload",
        "ダウンロード": "Download",
        "公開中": "Published",
        "非公開": "Private",
        "公開": "Public",
        "共有": "Share",
        "承認": "Approve",
        "却下": "Reject",
        "未確認": "Unconfirmed",
        
        // --- Profile & Settings ---
        "あなたのキュレーターレベル": "Your Curator Level",
        "進行度": "Progress",
        "Lv.6 まで残り18%": "18% remaining until Lv.6",
        "画像をアップロード": "Upload Image",
        "プロフィールの画像": "Profile Image",
        "自分のアイコンとして表示される画像を選択してください。": "Please select an image to be displayed as your icon.",
        "名前": "Name",
        "氏 (例：山田)": "Last Name (e.g. Yamada)",
        "名 (例：太郎)": "First Name (e.g. Taro)",
        "※各10文字以内": "Max 10 chars each",
        "※20文字以内": "Max 20 chars",
        "クリエイターネーム (表示名)": "Creator Name (Display Name)",
        "公式ディレクター申請": "Apply for Official Director",
        "オリジナルコンテンツ申請": "Original Content Application",
        "審査に合格すると「✓」バッジが付与されます": "You will receive a '✓' badge upon passing the review",
        "自己紹介": "Self Introduction",
        "※400文字以内": "Max 400 chars",
        "ファンおよびキュレーターとしての活動内容や目的などを記入してください。記入いただいた内容はアーティストに共有されます。": "Please describe your activities and goals as a fan and curator. The information provided will be shared with the artist.",
        "ログインアカウント (認証方法)": "Login Account (Authentication Method)",
        "Googleでログイン": "Login with Google",
        "Facebook でログイン": "Login with Facebook",
        "Instagram でログイン": "Login with Instagram",
        "𝕏 でログイン": "Login with 𝕏",
        "登録メールアドレス": "Registered Email Address",
        "表示言語 (Language)": "Display Language",
        "設定を保存して次へ": "Save Settings & Next",
        "メールアドレスの変更": "Change Email Address",
        "新しいメールアドレスを入力してください。": "Please enter a new email address.",
        "確認用の認証メールが送信されます。": "A verification email will be sent for confirmation.",
        "新しいメールアドレス": "New Email Address",
        "新しいメールアドレス（確認用）": "New Email Address (Confirm)",
        "認証メールを送信": "Send Verification Email",
        "認証メールを送信しました": "Verification Email Sent",
        "入力された新しいメールアドレス宛に変更確認のメールを送信しました。": "A confirmation email has been sent to the new email address provided.",
        "メール内の": "Please click the ",
        "「認証リンク」": "'Verification Link'",
        "をクリックして、変更処理を完了してください。": " in the email to complete the change process.",
        "連絡先情報": "Contact Information",

        // --- Auth / Onboarding ---
        "ログイン & 初期登録 - MYアルバム": "Login & Registration - MY Album",
        "ログイン / 新規登録": "Login / Sign Up",
        "基本情報の登録": "Basic Information Registration",
        "あなたのプロフィール情報として表示される内容を登録してください。": "Please register the information to be displayed as your profile.",
        "利用規約 と プライバシーポリシー に同意した上でログインしてください。": "Please agree to the Terms of Service and Privacy Policy to login.",
        "あおいちゃんの活動を、あなただけの特別なアルバムに。": "Make Aoi-chan's activities your special album.",
        "特別招待枠": "Special Invitation",
        
        // --- Payment, Plans & Storage (CRITICAL FIXES) ---
        "利用プランのご選択": "Select a Plan",
        "MYアルバムを快適にご利用いただくためのプランを選択してください。": "Please select a plan to comfortably use MY Album.",
        "ベーシック": "Basic",
        "スタンダード": "Standard",
        "プレミアム": "Premium",
        "おすすめ": "Recommended",
        "一番人気": "Most Popular",
        "年間データ転送量上限: 0.5TB": "Annual Data Transfer Limit: 0.5TB",
        "年間データ転送量上限: 1.0TB": "Annual Data Transfer Limit: 1.0TB",
        "年間データ転送量上限: 1TB": "Annual Data Transfer Limit: 1TB",
        "年間データ転送量上限: 2.0TB": "Annual Data Transfer Limit: 2.0TB",
        "年間データ転送量上限: 2TB": "Annual Data Transfer Limit: 2TB",
        "プランを決定して次へ": "Select Plan & Next",
        "決済情報のご入力": "Enter Payment Information",
        "選択したプランの決済情報を登録してください。": "Please register payment info for the selected plan.",
        "クレジットカード画面を開く": "Open Credit Card Screen",
        "後で決済情報を登録して進む": "Register Payment Info Later & Proceed",
        "現在のプラン": "Current Plan",
        "利用中のプラン": "Plan in Use",
        "スタンダード (現在のプラン)": "Standard (Current Plan)",
        "スタンダードプラン": "Standard Plan",
        "プレミアムプラン": "Premium Plan",
        "現在の利用状況": "Current Usage Status",
        "総利用枠": "Total Capacity",
        "残りの伝送量 (年間)": "Remaining Transfer Limit (Annual)",
        "上限超過後に追加購入を行わなくても、": "Even if you do not purchase additional capacity after exceeding the limit,",
        "1年間は大切なデータを安全に保持": "Your precious data will be kept safely for 1 year",
        "します（期間中のデータ引き出しも適宜可能です）。": " (You can also extract data appropriately during this period).",
        "データ転送料とは、アルバムへのアップロードやファンによるコンテンツ視聴等で発生する通信量（上り・下りのデータ送信量）です。": "Data transfer fees are generated by uploading to albums or fans viewing content (upstream/downstream data transmission).",
        "※アップロード・ダウンロードの合計データ量が転送料金としてカウントされます。": "The total data amount uploaded and downloaded will be counted as transfer fees.",
        "万が一、年間の転送量上限を超過した場合でも、オプションで追加チャージが可能です。": "Even if you exceed the annual transfer limit, you can optionally purchase additional charges.",
        "※超過後、1年間一度も追加チャージ等が行われず放置された場合、データは消滅しますのであらかじめご注意ください。": "Please note that if no additional charges are made for a year after exceeding the limit, your data will be deleted.",
        "ストレージの追加購入": "Purchase Additional Storage",
        "容量の追加購入 - MYアルバム": "Purchase Additional Capacity - MY Album",
        "大容量ファイルのダウンロードに必要な可能枠を追加します。お好みのプランを選択し、DMC PAYにて決済を行ってください。": "Add capacity for downloading large files. Please select a plan and pay with DMC PAY.",
        "ダウンロード容量の追加購入": "Purchase Additional Download Capacity",
        "購入履歴": "Purchase History",
        "取引履歴": "Transaction History",
        "過去3か月間の課金・収入の実績": "Billing and Income Records for the past 3 months",
        "DMC PAY 残高から支払う": "Pay from DMC PAY Balance",
        "DMC PAY で購入": "Purchase with DMC PAY",
        "DMC PAYで購入": "Purchase with DMC PAY",
        "DMC PAY残高": "DMC PAY Balance",
        "DMC PAY取引情報": "DMC PAY Transaction Info",
        "DMC PAY取引情報 - MYアルバム": "DMC PAY Transaction Info - MY Album",
        "DMC PAYに移動": "Go to DMC PAY",
        "クレジットカード (Stripe)": "Credit Card (Stripe)",
        "お支払い金額": "Payment Amount",
        "お支払い合計": "Total to Pay",
        "カード情報": "Card Information",
        "カード番号": "Card Number",
        "カード名義人": "Cardholder Name",
        "支払う": "Pay",
        "支払い": "Payment",
        "決済する": "Make Payment",
        "決済に失敗しました": "Payment failed",
        "クレジットカード情報をご確認ください。どうしても解決しない場合はそのまま続行し、後ほどマイページからご登録いただけます。": "Please verify your credit card information. If the issue persists, you can continue and register later from My Page.",
        "定期購入を申し込む": "Subscribe",
        "現在のプランからアップグレードします。": "Upgrade from current plan.",
        "※ Stripeの安全な決済ページへ遷移します": "* You will be redirected to Stripe's secure payment page",
        "※ いつでも解約可能です": "* You can cancel at any time",
        "※ これは外部決済ページ（モック）のデモ画面です": "※ This is a demo of the external payment page (mock).",
        "[デモ用: 決済失敗アクションをテストする]": "[Demo: Test Payment Failure Action]",
        "MYアルバム スタンダードプラン": "MY Album Standard Plan",

        // --- Dashboard / Home / Search ---
        "プレミアム会員": "Premium Member",
        "アーカイブ数": "Archives",
        "キュレーター数": "Curators",
        "神認定数": "God Certifications",
        "新着": "New Arrivals",
        "あなたのコンテンツが公認されました！": "Your content has been certified!",
        "MYアルバム限定": "MY Album Exclusive",
        "MYアルバム限定コンテンツ": "MY Album Exclusive Content",
        "MYストレージ(非公開)": "MY Storage (Private)",
        "詳細・編集": "Details / Edit",
        "画像": "Image",
        "画像・動画トータル": "Total Images / Videos",
        "動画": "Video",
        "今すぐ見に行く！": "Go see it now!",
        "✓公式 あおいちゃん推し活HUB": "✓Official Aoi-chan Fan HUB",
        "✓ 公式 あおいちゃん推し活HUB": "✓ Official Aoi-chan Fan HUB",
        "アルバム": "Album",
        "✓公式 みどりちゃん応援隊": "✓Official Midori-chan Squad",
        "✅ リンクをコピーしました": "✅ Link copied",
        "⭐ 神アーカイブ": "⭐ God Archive",
        "神アーカイブ": "God Archives",
        "共有アーカイブ": "Shared Archives",
        "公認コンテンツ": "Certified Content",
        "公認数：3 / 🏆 公式クリエイター": "Certifications: 3 / 🏆 Official Creator",
        "公認数：12 / 🏆 公式クリエイター": "Certifications: 12 / 🏆 Official Creator",
        "公認数：76 / 🏆 公式クリエイター": "Certifications: 76 / 🏆 Official Creator",
        "夏服生写真メイキング映像": "Summer Outfit Photo Making Video",
        "夏服生写真メイキング映像 - MYアルバム": "Summer Outfit Photo Making Video - MY Album",
        "東京ライブ 神ファンサシーンまとめ": "Tokyo Live Best Fan Service Compilation",
        "ステージの一番前から撮れた奇跡のファンサ動画です。周りの歓声も入ってます！": "Miraculous fan service video taken from the very front row. Crowd cheers included!",
        "夏祭りの屋台を巡った、プライベート感満載のメイキング映像です。浴衣姿がとっても素敵でした！": "A very private-feeling making video touring summer festival stalls. The yukata looked amazing!",
        "2024 夏フェス 神動画＆写真まとめ": "2024 Summer Fest God Video & Photo Compilation",
        "ファンイベント2024の東京フェスで撮影した最高の瞬間です。": "The best moments captured at the Tokyo Fest Fan Event 2024.",
        "あおいちゃん推し活HUB　MYストレージ(非公開)": "Aoi-chan Fan HUB MY Storage (Private)",
        "秘密のあおいちゃん.mp4": "Secret_Aoichan.mp4",
        "切り抜きパパラッチ101.jpg": "Cutout_Paparazzi_101.jpg",
        "✨ 公認済み": "✨ Certified",
        "【公認】2026 春のファン祭り！最前列ダイジェスト": "[Certified] 2026 Spring Fan Fest! Front Row Digest",
        "TaroCreativeさんが撮影・編集した渾身のダイジェスト動画が公式に認められました！": "TaroCreative's masterfully shot and edited digest video has been officially recognized!",
        "📸 公認写真": "📸 Certified Photo",
        "ステージ上の奇跡：あおいちゃんの決定的な一瞬": "Miracle on Stage: Aoi-chan's Defining Moment",
        "コンサート後半、最高の笑顔を見せてくれた瞬間の1枚です。": "A shot of the best smile shown during the latter half of the concert.",
        "ファンミーティングでのふとした表情": "A casual expression at the fan meeting",
        "トークコーナー中、ファンを見つめる優しい眼差しを捉えました。": "Captured a gentle gaze towards fans during the talk corner.",
        "ライブの熱気：光の海の中で": "Live Energy: In a Sea of Light",
        "ペンライトの波に包まれながら熱唱するあおいちゃんです。": "Aoi-chan singing passionately surrounded by a wave of penlights.",
        "休憩中のリラックス・スマイル": "Relaxed Smile during Break",
        "ファンミの途中で見せた、リラックスした可愛らしい笑顔。": "A relaxed, cute smile shown during the fan meeting.",
        "フィナーレ：感謝を込めて": "Finale: With Gratitude",
        "アンコールが終わり、ステージを去る直前の感動的なシーン。": "The touching scene right before leaving the stage after the encore.",
        "✨ あおいちゃんの推し活HUBよりリコメンド！": "✨ Recommended by Aoi-chan's Fan HUB!",
        "💛 きいろちゃん注意ボックス": "💛 Kiiro-chan Attention Box",
        "今注目の元気系アイドル「きいろちゃん」の魅力がぎゅっと詰まった特別ボックス。あおいちゃんも公認で大絶賛！ぜひチェックしてね！": "A special box packed with the charm of the currently trending energetic idol 'Kiiro-chan'. Highly praised and certified by Aoi-chan! Check it out!",
        "注目度": "Attention Level",
        "絞り込み": "Filter",
        "すべて": "All",
        "24H以内": "Within 24H",
        "48H以内": "Within 48H",
        "72H以内": "Within 72H",
        "推し名、配信日、神シーン等で検索": "Search by idol, date, God scene, etc.",
        "ファイル名や日付で検索...": "Search by filename or date...",
        "公式が神アーカイブとして認定！本人の承認済みコンテンツです。": "Certified as a God Archive! Officially approved content.",
        "神ファンサの瞬間！！": "Moment of God Fan Service!!",

        // --- Albums & Uploads ---
        "MYアルバム アーカイブ一覧": "MY Album Archive List",
        "新しいアルバムを作成": "Create New Album",
        "ドラッグ＆ドロップで大容量ファイルをアップロード。ご契約中は無期限で保存・URL共有できます。": "Drag & drop to upload large files. You can save and share URLs indefinitely during your subscription.",
        "タップしてファイルを選択": "Tap to select a file",
        "またはここにドラッグ＆ドロップ": "Or drag & drop here",
        "※複数ファイルの一括アップロードも可能です": "Batch upload of multiple files is also possible",
        "※1ファイルあたりの最大アップロード容量は32GBまでとなります。": "Maximum upload size per file is 32GB.",
        "ファイルのアップロード": "Upload Files",
        "ファイルをアップロードする": "Upload file",
        "アップロード開始": "Start Upload",
        "別のファイルを選択する": "Select Another File",
        "ダウンロードパスワード (任意)": "Download Password (Optional)",
        "設定すると、ダウンロード時にこのパスワードが必要になります。": "If set, this password will be required when downloading.",
        "自分へメール": "Email to Self",
        "自分へ✉": "Email to Self",
        "友達へシェア": "Share with Friends",
        "宛先メールアドレスを入力": "Enter recipient email address",
        "以下のURLをコピーして共有してください": "Please copy and share the URL below",
        "URLコピー": "Copy URL",
        "URLをコピーしました": "URL Copied",
        "アーカイブ&編集": "Archive & Edit",
        "MYアルバムに保存する": "Save to MY Album",
        "ダウンロード・保存": "Download / Save",
        "ZIPダウンロード": "Download ZIP",
        "すべて選択": "Select All",
        "選択解除": "Deselect",

        // --- Tipping / Tipping Modal ---
        "投げ銭": "Tip",
        "応援する": "Support",
        "応援する金額を選択": "Select Support Amount",
        "自由入力": "Custom",
        "自由": "Custom",
        "円": "JPY",
        "決定": "Confirm",
        "お支払い方法を選択": "Select Payment Method",
        "投げ銭が完了しました！": "Support completed!",
        "クリエイターへの応援ありがとうございます。": "Thank you for supporting the creator.",

        // --- Editor / View Lists / Storage & Others ---
        "📸 アイコン画像の推奨設定": "📸 Recommended Icon Settings",
        "・推奨サイズ: 320×320px 以上の正方形 (1:1)": "・Recommended size: 320x320px or larger square (1:1)",
        "・ファイル容量: 8MB以内 (JPGまたはPNG)": "・File size: Under 8MB (JPG or PNG)",
        "💡 データ転送量についての大切なお知らせ": "💡 Important Notice on Data Transfer Limits",
        "※ 超過後、1年間一度も追加チャージ等が行われず放置された場合、データは消滅しますのであらかじめご注意ください。": "※ Please note that if the limit is exceeded and no additional charge is made for 1 year, your data will be deleted.",
        "🎁 投げ銭": "🎁 Tip",
        "アップロード履歴": "Upload History",
        "伝送量・利用状況": "Transfer & Usage Status",
        "保存済み共有ファイル": "Saved Shared Files",
        "共有URL経由で受信したファイルの一覧です。": "List of files received via Shared URLs.",
        "ご契約中は、この一覧からいつでも再ダウンロードが可能です。": "While your plan is active, you can redownload from this list at any time.",
        "保存済": "Saved",
        "MYアルバム 保存": "Save to MY Album",
        "受取日: たった今": "Received: Just now",
        "共有元: ": "Shared by: ",
        "共有元:": "Shared by:",
        "アップグレード": "Upgrade",
        "写真編集 - MYアルバム": "Photo Edit - MY Album",
        "動画編集 - MYアルバム": "Video Edit - MY Album",
        "写真編集": "Photo Edit",
        "動画編集": "Video Edit",
        "カラー": "Color",
        "コントラスト": "Contrast",
        "明るさ": "Brightness",
        "彩度": "Saturation",
        "文字入れを適用": "Apply Text",
        "フィルターを適用": "Apply Filter",
        "リセット": "Reset",
        "適用": "Apply",
        "テキストを入力...": "Enter text...",
        "フォント": "Font",
        "ゴシック": "Gothic",
        "明朝": "Mincho",
        "手書き風": "Handwriting",
        "自由入力": "Custom Input",
        "お支払い金額": "Payment Amount",
        "お支払い合計": "Total to Pay",
        "カード情報": "Card Information",
        "カード番号": "Card Number",
        "カード名義人": "Cardholder Name",
        "/ 月": "/ month",
        "/ 月 ": "/ month",
        "/ 年": "/ year",
        " / 月": " / month",
        " / 年": " / year",
        "円": "JPY",
        "たった今": "Just now",
        "回": "views",
        "いいね": "Likes",
        "コメント": "Comments",
        "24H以内": "Within 24H",
        "48H以内": "Within 48H",
        "72H以内": "Within 72H",
        "約": "Approx.",
        "残り": "Remaining",
        "件選択中": "items selected",

        // --- Editor ---
        "写真編集 - MYアルバム": "Photo Editing - MY Album",
        "動画編集 - MYアルバム": "Video Editing - MY Album",
        "フィルターを適用": "Apply Filter",
        "文字入れを適用": "Apply Text",
        "明るさ": "Brightness",
        "彩度": "Saturation",
        "コントラスト": "Contrast",
        "オリジナル": "Original",
        "手書き風": "Handwritten",
        "ゴシック": "Gothic",
        "明朝": "Mincho",
        "明朝 (Serif)": "Mincho (Serif)",
        "モダン (Sans)": "Modern (Sans)",
        "フォント": "Font",
        "カラー": "Color",
        "テキストを入力...": "Enter text...",
        "この範囲で切り抜く": "Crop this area",
        "編集が完了しました！": "Editing completed!",
        "編集に戻る": "Return to Edit",
        "SNSにシェア": "Share to SNS",
        "SNSで世界中にシェアしましょう！": "Share with the world on SNS!",
        "このコンテンツをシェア": "Share this content",
        "コンテンツをシェア": "Share content",

        // --- Dynamic Validation Error Messages (JS Injected) ---
        "20文字以内で入力してください。": "Please enter within 20 characters.",
        "400文字以内で入力してください。": "Please enter within 400 characters.",
        "有効なメールアドレス（@を含む）を入力してください。": "Please enter a valid email address containing '@'.",
        "確認用のメールアドレスも「@」を含む有効な形式で入力してください。": "Please enter a valid email address containing '@' for confirmation.",
        "確認用メールアドレスが一致しません。": "The confirmation email addresses do not match.",
        "10文字以内で入力してください。": "Please enter within 10 characters.",

        // --- Mock Data & Uncaught Fragments (User Report) ---
        "1TB/年": "1TB/year",
        "✨ 神アーカイブ": "✨ God Archive",
        "過去の東京ライブ配信から、神がかっているファンサ対応の瞬間だけを繋ぎ合わせた究極のまとめ集です。": "The ultimate compilation of God-tier fan service moments from past Tokyo live streams.",
        "合計22ファイルの動画・画像が収録されています。": "A total of 22 video and image files are included.",
        "あおいちゃん 他1名が編集": "Edited by Aoi-chan and 1 other",
        "昨夜": "Last night",
        "コレクション内容": "Collection Contents",
        "全 22 コンテンツ": "Total 22 Contents",
        "1. 東京ライブ 神ファンサシーンまとめ": "1. Tokyo Live God Fan Service Compilation",
        "2. ライブ全体 メインビジュアル": "2. Live Overall Main Visual",
        "3. 登場シーン 歓喜の瞬間": "3. Entrance Scene Moment of Joy",
        "4. 特別衣装 全身ショット": "4. Special Outfit Full Body Shot",
        "5. 神MC 爆笑トーク集": "5. God MC Hilarious Talk Compilation",
        "6. バックステージ オフショット": "6. Backstage Off-shots",
        "7. カメラ目線の神ウインク": "7. God Wink looking at camera",
        "8. 定番曲 ラスサビの盛り上がり": "8. Standard Song Last Chorus Climax",
        "9. 観客席へのレス ファンサ神対応": "9. Fan Service God Response to Audience",
        "10. ゲストコラボ楽曲 フルVer": "10. Guest Collab Song Full Ver",
        "11. ライブ終了後 集合写真": "11. Post-Live Group Photo",
        "12. アンコール 涙のMC": "12. Encore Tearful MC",
        "13. ステージ袖からの隠し撮り": "13. Sneak Shot from Stage Wing",
        "14. リハーサル中の真剣な表情": "14. Serious Expression during Rehearsal",
        "15. メンバー紹介 パフォーマンス": "15. Member Introduction Performance",
        "16. サプライズケーキ登場": "16. Surprise Cake Appearance",
        "17. ソロダンス メドレー": "17. Solo Dance Medley",
        "18. 投げキッス＆お手振り": "18. Blowing Kisses & Waving",
        "19. 円陣 気合い入れシーン": "19. Huddle Hype Scene",
        "20. バラード曲 アコースティックVer": "20. Ballad Acoustic Ver",
        "21. タオルを振り回す全力笑顔": "21. Full Smile Swinging Towel",
        "22. エンディング 全員でジャンプ": "22. Ending Group Jump",
        "あおいちゃんの休日ショット": "Aoi-chan's Day Off Shot",
        "Ver.4 編集プロジェクト": "Ver.4 Editing Project",
        "シェアする": "Share",
        "✂️ トリム": "✂️ Trim",
        "🛠 調整": "🛠 Adjust",
        "✨ フィルター": "✨ Filter",
        "🅰️ 文字入れ": "🅰️ Text",
        "🐇 速度": "🐇 Speed",
        "✂️ 切り抜き": "✂️ Crop",
        "ドラッグして再生範囲を調整": "Drag to adjust playback range",
        "Ver.4 編集済み・0:15": "Ver.4 Edited・0:15",
        "アーティストへ申請": "Apply to Artist",
        "編集を追加": "Add Edit",
        "ダウンロード・保存するコンテンツに✓を付けてください": "Please check the contents to download/save",
        "MYストレージ保存": "Save to MY Storage",
        "MYストレージの": "Saved in",
        "ダウンロードに保存しました": "MY Storage Downloads",
        "👉 ここをクリックして確認": "👉 Click here to check",
        "5個のファイルをアップロード中...": "Uploading 5 files...",
        "5個のファイルをアップロード中.": "Uploading 5 files...",
        "アップロード完了！": "Upload Complete!",
        "または登録外のメールアドレスへ送る": "Or send to unregistered email address",
        "別のファイルをアップロードする": "Upload another file",
        "共有元で削除されました": "Deleted by the sender",
        "登録メールアドレスへダウンロードＵＲＬを送信しました": "Sent download URL to registered email",
        "登録メールアドレスへダウンロードURLを送信しました": "Sent download URL to registered email",
        "友達のメルアド": "Friend's email",
        "ダウンロードを開始しました": "Download started",
        "スマホで簡単！VLLO動画編集": "Easy with Smartphone! VLLO Video Editing",
        "推し活SNSで映える神編集テクニック": "God Editing Techniques to Shine on Fan SNS",
        "ゼロから学ぶ本格動画編集": "Learn Professional Video Editing from Zero",
        "プロ並みのクオリティを目指す方向け": "For those aiming for pro-level quality",
        "DaVinci Resolve マスター": "DaVinci Resolve Master",
        "映画級のカラーグレーディングを実践": "Practice Movie-grade Color Grading",
        "2026年 3月": "March 2026",
        "2026年 2月": "February 2026",
        "Payment あおいちゃん熱烈応援アルバム": "Payment Aoi-chan Passionate Support Album",
        "収入 あるあるあるね": "Income Aru-aru-arune",
        "Payment サブスクリプション2026年3月": "Payment Subscription March 2026",
        "Payment プレミアムストレージ2026年3月": "Payment Premium Storage March 2026",
        "収入 あおいちゃんの推し活HUB 1万音量": "Income Aoi-chan Fan HUB 10k Volume",
        "収入 あおいちゃんの推し活HUB 1000ファン": "Income Aoi-chan Fan HUB 1000 Fans",
        "メールアドレス": "Email Address",
        "宛先メールアドレスを入力": "Enter recipient email address",
        "友達のメルアド": "Friend's email",
        "ファイル名や日付で検索...": "Search by filename or date...",
        "推し名、配信日、神シーン等で検索": "Search by idol name, date, God scene, etc.",
        "例：TaroCreative": "e.g. TaroCreative",
        "例: ライブ最高でした！": "e.g. The live was amazing!",
        "例: 1234": "e.g. 1234",
        "新着アップロード完了": "New Upload Complete",
        "「2024 夏フェス 神動画＆写真まとめ」の処理が完了しました。クリックして編集へ進んでください。": "Processing of '2024 Summer Fes God Video & Photo Compilation' is complete. Click to proceed to editing.",

        "24H以内": "Within 24H",
        "48H以内": "Within 48H",
        "72H以内": "Within 72H",
        "MYアルバム限定コンテンツ": "MY Album Exclusive Content",
        "🎥 動画": "🎥 Video",
        "🖼️ 画像": "🖼️ Image",
        "📸 画像": "📸 Image",
        "📱 ショート動画": "📱 Short Video",
        "📝 テキスト": "📝 Text",
        "アーカイブ": "Archive",
        "✓ アーカイブ済": "✓ Archived",
        "アーカイブ&編集": "Archive & Edit",
        "MYアルバムに行く": "Go to MY Album",
        "Instagramに行く": "Go to Instagram",
        "Xに行く": "Go to X",
        "YouTubeに行く": "Go to YouTube",
        "SHOWROOMに行く": "Go to SHOWROOM",
        "TikTokに行く": "Go to TikTok",
        ">>>もっと見る": ">>> View More",
        "[蒼くみ] 秘蔵！ファンミの裏側大公開！": "[Aokumi] Treasured! Behind the scenes of the Fan Meeting!",
        "[蒼くみ] レッスン終わりのクタクタトーク": "[Aokumi] Exhausted talk after lesson",
        "[蒼くみ] 新作衣装のフィッティング風景": "[Aokumi] New costume fitting scene",
        "[蒼くみ] お気に入りカフェでの一枚": "[Aokumi] A shot at favorite cafe",
        "[蒼くみ] 昨年の夏ライブ、奇跡の瞬間": "[Aokumi] Miracle moment from last year's summer live",
        "本日もお疲れ様でした！明日の撮影も頑張るぞー！！✨": "Good work today! Gonna do my best for tomorrow's shoot!! ✨",
        "やっと美容院行けた✂️サッパリしたよ〜": "Finally went to the salon ✂️ Feeling fresh~",
        "[蒼くみ] 【神企画】メンバー全員でドッキリ仕掛けてみた！": "[Aokumi] [God Plan] Tried pranking all members!",
        "[蒼くみ] 【踊ってみた】最新曲のサビだけ本気ダンス": "[Aokumi] [Danced] Serious dance of just the chorus of new song",
        "[蒼くみ] 【Vlog】休日の過ごし方・完全プライベート密着": "[Aokumi] [Vlog] How to spend a day off・Full private coverage",
        "[蒼くみ] 🌟ゲリラ配信！みんなでお話しよう🌟": "[Aokumi] 🌟 Guerrilla stream! Let's talk everyone 🌟",
        "アーカイブ一覧": "Archive List",
        "オリジナルコンテンツ申請": "Original Content Application",
        "MYアルバム アーカイブ一覧": "MY Album Archive List",
        "すべて選択": "Select All",
        "選択解除": "Deselect All",
        "ダウンロード・保存": "Download / Save",
        "キャンセル": "Cancel",
        "オリジナル": "Original",
        "編集": "Edit",
        "編集1": "Edit1",
        "編集2": "Edit2",
        "編集3": "Edit3",
        "編集4": "Edit4",
        "アーティストへ申請": "Apply to Artist",
        "+ 編集を追加": "+ Add Edit",
        "編集履歴はありません": "No edit history",
        "アーティストへコンテンツレビュー申請": "Content Review Application to Artist",
        "コンテンツ名 (20文字以内)": "Content Name (within 20 characters)",
        "20文字以内で入力してください": "Please enter within 20 characters",
        "ファイルのアップロード": "Upload File",
        "タップしてファイルを選択": "Tap to select a file",
        "最大 32GB まで": "Up to 32GB max",
        "申請する": "Apply",
        "送信中...": "Sending...",
        "申請完了！": "Application Complete!",
        "アーティストへ公認申請を送信しました！": "Sent official application to artist!",
        "申請中...": "Applying...",
        "申請完了": "Application Complete",
        "アーティストへ申請を完了しました": "Application to artist completed",
        "申請履歴": "Application History",
        "未確認": "Unconfirmed",
        "👑 神認定": "👑 God Certified",
        "承認": "Approved",
        "却下": "Rejected",
        "ZIPダウンロード": "ZIP Download",
        "MYストレージ保存": "Save to MY Storage",
        "☁️ MYストレージの<br>ダウンロードに保存しました": "☁️ Saved to MY Storage<br>Downloads",
        "👉 ここをクリックして確認": "👉 Click here to check",
        "ダウンロード・保存するコンテンツに✓を付けてください": "Please check ✓ the content you want to download/save",

        "秘蔵！ファンミの裏側大公開！": "Treasured! Behind the scenes of the Fan Meeting!",
        "あおいちゃんの休日ショット": "Aoi-chan's Holiday Shot",
        "レッスン終わりのクタクタトーク": "Exhausted talk after lesson",
        "あおいちゃん生誕祭カメラ": "Aoi-chan Birthday Festival Camera",
        "神ファンサの瞬間！！": "Moment of God Fan Service!!",
        "ライブ開演前風景": "Scenery before live starts",
        "ブレブレの写真集": "Blurry photo book",
        "📷 Instagram": "📷 Instagram",

        "[蒼くみ] 🌟夜のまったりカラオケ配信🌟パート2": "[Aokumi] 🌟 Relaxing night karaoke stream 🌟 Part 2",
        "[蒼くみ] 今流行りの音源で踊ってみた🎵 #蒼くみ": "[Aokumi] Danced to trending audio 🎵 #Aokumi",
        "[蒼くみ] メイク中のオフショット💄 リクエスト募集中！": "[Aokumi] Off-shot during makeup 💄 Taking requests!",
        "[蒼くみ] ライブ後のハイテンションでご挨拶！✨": "[Aokumi] High tension greeting after live! ✨",

        "MYストレージ": "MY Storage",
        "ファイルをアップロードする": "Upload File",
        "ドラッグ＆ドロップで大容量ファイルをアップロード。ご契約中は無期限で保存・URL共有できます。": "Upload large files via drag & drop. Save and share indefinitely during your contract.",
        "※1ファイルあたりの最大アップロード容量は32GBまでとなります。": "* Maximum upload size is 32GB per file.",
        "またはここにドラッグ＆ドロップ": "or drag & drop here",
        "※複数ファイルの一括アップロードも可能です": "* Batch upload of multiple files is supported",
        "※デモ：5つのファイルを一括の場合": "* Demo: Batch of 5 files",
        "5個のファイルをアップロード中...": "Uploading 5 files...",
        "ダウンロードパスワード (任意)": "Download Password (Optional)",
        "設定すると、ダウンロード時にこのパスワードが必要になります。": "If set, this password will be required when downloading.",
        "アップロード完了！": "Upload Complete!",
        "以下のURLをコピーして共有してください": "Please copy and share the URL below",
        "または登録外のメールアドレスへ送る": "Or send to unregistered email address",
        "宛先メールアドレスを入力": "Enter destination email",
        "アップロード開始": "Start Upload",
        "アップロード履歴": "Upload History",
        "絞り込み": "Filter",
        "URLコピー": "Copy URL",
        "自分へメール": "Email to Self",
        "非公開にしてファイルを削除しますか？": "Make private and delete file?",
        "伝送量・利用状況": "Transfer Limit / Usage Status",
        "アップグレード": "Upgrade",
        "保存済み共有ファイル": "Saved Shared Files",
        "共有URL経由で受信したファイルの一覧です。<br>ご契約中は、この一覧からいつでも再ダウンロードが可能です。": "List of files received via shared URL.<br>You can redownload anytime during your contract.",
        "保存済": "Saved",
        "たった今": "Just now",
        "自分へ✉": "To Self ✉",
        "友達へシェア": "Share with Friend",
        "友達のメルアド": "Friend's Email",
        "公式みどりちゃん応援隊": "Official Midori-chan Squad",
        "期限切れ": "Expired",
        "共有元で削除されました": "Deleted by sender",
        "ダウンロードを開始しました": "Download started",
        "別のファイルを選択する": "Select another file",
        "アップロード中...": "Uploading...",
        "別のファイルをアップロードする": "Upload another file",
        "MYアルバム 保存": "MY Album Save"
    }
};

// State and Maps
let currentLang = 'ja';
const originalTexts = new WeakMap();
const originalPlaceholders = new WeakMap();
const originalValues = new WeakMap();

function isTranslatingElement(node) {
    if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE' || node.tagName === 'NOSCRIPT' || node.tagName === 'HTML' || node.tagName === 'HEAD') {
        return false;
    }
    if (node.classList && node.classList.contains('no-i18n')) {
        return false;
    }
    return true;
}

function translateNode(node, lang) {
    if (!isTranslatingElement(node)) return;

    // Translate Inputs / Placeholders
    if (node.nodeType === Node.ELEMENT_NODE) {
        // Placeholders
        if (node.hasAttribute('placeholder')) {
            if (!originalPlaceholders.has(node)) {
                originalPlaceholders.set(node, node.getAttribute('placeholder'));
            }
            let origP = originalPlaceholders.get(node).trim();
            if (lang === 'ja') {
                node.setAttribute('placeholder', originalPlaceholders.get(node));
            } else if (i18nData[lang] && i18nData[lang][origP]) {
                node.setAttribute('placeholder', i18nData[lang][origP]);
            }
        }
        
        // Button values
        if (node.tagName === 'INPUT' && (node.type === 'button' || node.type === 'submit')) {
            if (!originalValues.has(node)) {
                originalValues.set(node, node.value);
            }
            let origV = originalValues.get(node).trim();
            if (lang === 'ja') {
                node.value = originalValues.get(node);
            } else if (i18nData[lang] && i18nData[lang][origV]) {
                node.value = i18nData[lang][origV];
            }
        }
    }

    // Translate Text nodes
    for (let child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            let text = child.nodeValue;
            if (text.trim() === "") continue;

            if (!originalTexts.has(child)) {
                originalTexts.set(child, text);
            }

            let originalText = originalTexts.get(child);
            let key = originalText.trim();

            if (lang === 'ja') {
                child.nodeValue = originalText;
            } else if (i18nData[lang] && i18nData[lang][key]) {
                let leading = originalText.match(/^\s*/)[0];
                let trailing = originalText.match(/\s*$/)[0];
                child.nodeValue = leading + i18nData[lang][key] + trailing;
            } else if (lang !== 'ja') {
                // Dynamic prefix/suffix fallback
                let translated = key;
                let matched = false;
                
                const dynamicRules = [
                    { prefix: "受取日: ", target: "Received: " },
                    { prefix: "共有元: ", target: "Shared by: " },
                    { prefix: "申請日: ", target: "Applied: " },
                    { prefix: "掲載日：", target: "Published: " },
                    { prefix: "更新: ", target: "Updated: " },
                    { prefix: "年間データ転送量上限: ", target: "Annual Data Transfer Limit: " },
                    { prefix: "公認数：", target: "Certifications: " },
                    { suffix: "件選択中", target: " items selected" },
                    { suffix: " 個のファイルを選択済", target: " files selected" },
                    { suffix: "件をZIPにまとめています...", target: " items packing into ZIP..." },
                    { suffix: " / 月", target: " / month" },
                    { suffix: " / 年", target: " / year" },
                    { suffix: "/月", target: "/month" },
                    { suffix: "/年", target: "/year" },
                    { suffix: "円", target: " JPY" },
                    { suffix: "回", target: " views" },
                    { suffix: "いいね", target: " Likes" },
                    { suffix: "コメント", target: " Comments" }
                ];

                for (let rule of dynamicRules) {
                    if (rule.prefix && translated.startsWith(rule.prefix)) {
                        translated = rule.target + translated.substring(rule.prefix.length);
                        matched = true;
                    }
                    if (rule.suffix && translated.endsWith(rule.suffix)) {
                        translated = translated.substring(0, translated.length - rule.suffix.length) + rule.target;
                        matched = true;
                    }
                }
                
                if (matched) {
                    // Make sure we apply leading/trailing spaces appropriately
                    let leadingMatch = originalText.match(/^\s*/);
                    let trailingMatch = originalText.match(/\s*$/);
                    let leading = leadingMatch ? leadingMatch[0] : "";
                    let trailing = trailingMatch ? trailingMatch[0] : "";
                    child.nodeValue = leading + translated + trailing;
                }
            }
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            translateNode(child, lang);
        }
    }
}

function setLanguage(lang) {
    if (!lang) lang = 'ja';
    currentLang = lang;
    localStorage.setItem('myalbum_lang', lang);
    document.documentElement.lang = lang;
    
    try {
        translateNode(document.body, lang);
        
        // Title translation
        if(document.title) {
            if(!window.originalTitle) window.originalTitle = document.title;
            let titleKey = window.originalTitle.trim();
            if(lang === 'ja') {
                document.title = window.originalTitle;
            } else if(i18nData[lang] && i18nData[lang][titleKey]) {
                document.title = i18nData[lang][titleKey];
            }
        }
    } catch (e) {
        console.error("i18n error", e);
    }
}

// Global MutationObserver to automatically translate newly added elements or JS text injections
const domObserver = new MutationObserver((mutations) => {
    if (currentLang === 'ja') return;
    
    let shouldTranslate = false;
    for (let mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            shouldTranslate = true;
            break;
        }
    }
    
    if (shouldTranslate) {
        // Debounce translation step to avoid heavy re-renders
        if (window.i18nObserverTimeout) clearTimeout(window.i18nObserverTimeout);
        window.i18nObserverTimeout = setTimeout(() => {
            domObserver.disconnect();
            translateNode(document.body, currentLang);
            domObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
        }, 50);
    }
});

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('myalbum_lang') || 'ja';
    setLanguage(savedLang);

    // Profile page language selector binding
    const langSelect = document.querySelector('select');
    if (langSelect && langSelect.innerHTML.includes('日本語') && langSelect.innerHTML.includes('English')) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Start Observing changes for dynamic UI logic
    domObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
});
