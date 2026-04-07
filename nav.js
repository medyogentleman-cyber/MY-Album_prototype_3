document.addEventListener("DOMContentLoaded", function() {
    // Determine active path
    let currentPath = window.location.pathname.split('/').pop() || 'home.html';
    
    // Inject Styles once
    if (!document.getElementById('nav-styles')) {
        const style = document.createElement('style');
        style.id = 'nav-styles';
        style.innerHTML = `
            .bottom-nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 430px; background-color: rgba(255,255,255,0.95); backdrop-filter: blur(10px); height: var(--nav-height, 80px); display: flex; justify-content: space-around; align-items: center; border-top: 1px solid var(--border-color, #EAE8F2); z-index: 100; padding-bottom: env(safe-area-inset-bottom, 0px); }
            .nav-item { display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-sub, #8E8E93); text-decoration: none; transition: 0.2s; width: 100%; max-width: 60px; height: 100%; flex: 1; }
            .nav-item.active { color: var(--primary-color, #FF6B00); }
            .nav-item svg { width: 28px; height: 28px; fill: currentColor; }
            .nav-avatar { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 2px solid transparent; }
            .nav-item.active .nav-avatar { border-color: var(--primary-color, #FF6B00); }
            
            /* Live Modal Styles */
            .live-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9998; display: none; opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(4px); }
            .live-modal-overlay.active { display: block; opacity: 1; }
            .live-modal-container { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); width: 100%; max-width: 430px; background: #000; border-radius: 12px; z-index: 9999; display: none; opacity: 0; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow: hidden; }
            .live-modal-container.active { display: flex; flex-direction: column; opacity: 1; transform: translate(-50%, -50%) scale(1); }
            .live-modal-header { display: flex; justify-content: flex-end; padding: 12px; position: absolute; top: 0; right: 0; z-index: 10; width: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent); pointer-events: none;}
            .live-modal-close { background: rgba(255,255,255,0.25); pointer-events: auto; color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); font-size: 24px; line-height: 1; transition: 0.2s; backdrop-filter: blur(4px);}
            .live-modal-close:hover { background: rgba(255,255,255,0.4); transform: scale(1.05); }
            .live-modal-content { width: 100%; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; background: #000; }
            
            /* Live Button styling */
            .nav-item-live { color: #FF3B30 !important; font-weight: 900; font-size: 10px; gap: 3px; position: relative; }
            .nav-item-live svg { width: 26px !important; height: 26px !important; animation: pulseLiveIcon 1.5s infinite; filter: drop-shadow(0 2px 4px rgba(255,59,48,0.3)); }
            @keyframes pulseLiveIcon { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
            .live-label { line-height: 1; letter-spacing: 0.5px; }
        `;
        document.head.appendChild(style);
        
        // Modal logic
        window.openLiveModal = function(e) {
            if(e) e.preventDefault();
            document.getElementById('liveModalOverlay').classList.add('active');
            document.getElementById('liveModalContainer').classList.add('active');
        };
        window.closeLiveModal = function() {
            document.getElementById('liveModalOverlay').classList.remove('active');
            document.getElementById('liveModalContainer').classList.remove('active');
        };
    }

    // Determine active links
    const isHome = currentPath === 'home.html' || currentPath === 'home_other.html' ? 'active' : '';
    const isSearch = currentPath === 'search.html' ? 'active' : '';
    const isAlbum = currentPath === 'my_albums.html' || currentPath.startsWith('followed_album_') || currentPath === 'album_view.html' ? 'active' : '';
    const isStorage = currentPath === 'storage.html' || currentPath === 'storage_purchase.html' ? 'active' : '';
    const isPayment = currentPath === 'payment.html' || currentPath === 'payment_history.html' ? 'active' : '';
    const isStore = currentPath === 'store.html' || currentPath === 'store_checkout.html' || currentPath === 'order_history.html' ? 'active' : '';
    const isProfile = currentPath === 'profile.html' || currentPath === 'profile_edit.html' ? 'active' : '';

    const navHTML = `
        <a href="home.html" class="nav-item ${isHome}">
            <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </a>
        <a href="search.html" class="nav-item ${isSearch}">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.90L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </a>
        <a href="my_albums.html" class="nav-item ${isAlbum}">
            <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"/></svg>
        </a>
        <a href="#" class="nav-item nav-item-live" onclick="openLiveModal(event)">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            <span class="live-label">LIVE</span>
        </a>
        <a href="storage.html" class="nav-item ${isStorage}">
            <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        </a>
        <a href="payment.html" class="nav-item ${isPayment}">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
        </a>
        <a href="store.html" class="nav-item ${isStore}">
            <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </a>
        <a href="profile.html" class="nav-item ${isProfile}">
            <img src="images/avatar.png" alt="Profile" class="nav-avatar">
        </a>
    `;

    // Remove old nav if any
    const existingNavs = document.querySelectorAll('.bottom-nav');
    existingNavs.forEach(n => n.remove());

    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.innerHTML = navHTML;
    
    // Append to app-container if it exists, otherwise to body
    const container = document.querySelector('.app-container');
    if (container) {
        container.appendChild(nav);
    } else {
        document.body.appendChild(nav);
    }

    // Inject Live Modal if not exists
    if (!document.getElementById('liveModalOverlay')) {
        const modalHtml = `
            <div class="live-modal-overlay" id="liveModalOverlay" onclick="closeLiveModal()"></div>
            <div class="live-modal-container" id="liveModalContainer">
                <div class="live-modal-header">
                    <button class="live-modal-close" onclick="closeLiveModal()">×</button>
                </div>
                <div class="live-modal-content">
                    <iframe src="https://embed.liveavatar.com/v1/9c11e28a-6e35-4562-9477-c84e4a785336" allow="microphone" title="LiveAvatar Embed" style="aspect-ratio: 16/9; width: 100%; height: 100%; border: none;"></iframe>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
});
