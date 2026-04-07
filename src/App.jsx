import { useState, useEffect } from "react";

const APP_STORE_LINK = "#";

export default function TuGatherLanding() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const features = [
    { icon: "🎉", title: "Event Planning", desc: "Create events for trips, birthdays, weddings, and game nights. Add dates, locations, and cover photos." },
    { icon: "💸", title: "Expense Splitting", desc: "Splitwise-style tracking. See who owes what and settle up via Venmo, PayPal, or Zelle." },
    { icon: "💬", title: "Group Chat", desc: "Real-time messaging with photos, polls, and travel cards shared in the conversation." },
    { icon: "✈️", title: "Flights & Hotels", desc: "Track everyone's travel details in one place with rich itinerary cards." },
    { icon: "👥", title: "Guest Management", desc: "Invite via SMS or email, track RSVPs, and send reminders to pending guests." },
    { icon: "📸", title: "Shared Memories", desc: "Photo gallery and Stories-style slideshows from your events. Relive every moment." },
  ];

  return (<div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      *{margin:0;padding:0;box-sizing:border-box}html,body{background:#0a0a0a;overflow-x:hidden;max-width:100vw}
      .tg-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(24px);background:rgba(10,10,10,0.85);border-bottom:1px solid rgba(42,178,110,0.08)}
      .tg-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
      .tg-logo-icon{width:34px;height:34px;background:linear-gradient(135deg,#2ab26e,#6cf4b0);border-radius:9px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#0a0a0a}
      .tg-logo-text{font-weight:700;font-size:19px;letter-spacing:-0.5px;color:#fff}.tg-logo-text span{color:#2ab26e}
      .tg-nav-cta{background:#2ab26e;color:#0a0a0a;border:none;padding:10px 24px;border-radius:100px;font-weight:600;font-size:14px;cursor:pointer;transition:all 0.3s;text-decoration:none;font-family:inherit}
      .tg-nav-cta:hover{background:#6cf4b0;transform:translateY(-1px)}
      .tg-hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:120px 20px 40px;text-align:center;position:relative}
      .tg-hero::before{content:'';position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:900px;height:900px;background:radial-gradient(circle,rgba(42,178,110,0.1) 0%,transparent 65%);pointer-events:none}
      .tg-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(42,178,110,0.08);border:1px solid rgba(42,178,110,0.15);padding:7px 18px;border-radius:100px;font-size:13px;font-weight:500;color:#6cf4b0;margin-bottom:28px;opacity:0;animation:fadeIn 0.6s ease 0.1s forwards}
      .tg-hero h1{font-size:clamp(44px,6.5vw,76px);font-weight:800;line-height:1.05;letter-spacing:-3px;margin-bottom:20px;opacity:0;animation:fadeInUp 0.7s ease 0.15s forwards}
      .tg-hero h1 .green{background:linear-gradient(135deg,#2ab26e,#6cf4b0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
      .tg-hero-tagline{font-size:clamp(18px,2.5vw,24px);font-weight:500;color:#919191;letter-spacing:1px;margin-bottom:24px;opacity:0;animation:fadeInUp 0.7s ease 0.2s forwards}
      .tg-hero-sub{font-size:17px;color:#919191;max-width:460px;line-height:1.6;margin-bottom:36px;opacity:0;animation:fadeInUp 0.7s ease 0.25s forwards}
      .tg-cta-btn{display:inline-flex;align-items:center;gap:10px;background:#2ab26e;color:#0a0a0a;border:none;padding:15px 32px;border-radius:100px;font-weight:700;font-size:15px;cursor:pointer;transition:all 0.3s;text-decoration:none;font-family:inherit;opacity:0;animation:fadeInUp 0.7s ease 0.35s forwards}
      .tg-cta-btn:hover{background:#6cf4b0;transform:translateY(-2px);box-shadow:0 16px 40px rgba(42,178,110,0.25)}
      .tg-showcase-hero{width:100%;max-width:900px;margin:60px auto 0;position:relative;min-height:680px;display:flex;align-items:center;justify-content:center;opacity:0;animation:fadeIn 0.8s ease 0.5s forwards}
      .tg-center-phone{width:300px;height:620px;background:#171717;border-radius:42px;border:3px solid #333;overflow:hidden;position:relative;z-index:10;box-shadow:0 40px 80px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.05),0 0 120px rgba(42,178,110,0.08)}
      .tg-center-phone::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:110px;height:30px;background:#000;border-radius:0 0 18px 18px;z-index:10}
      .tg-center-phone img{width:100%;height:100%;object-fit:cover;object-position:top}
      .tg-app-screen{width:100%;height:100%;background:#0d0d0d;display:flex;flex-direction:column;overflow:hidden;font-family:'Plus Jakarta Sans',sans-serif}
      .tg-sb{display:flex;justify-content:space-between;align-items:center;padding:8px 20px 4px;font-size:12px;color:#fff;margin-top:30px}
      .tg-app-header{display:flex;align-items:center;justify-content:space-between;padding:8px 16px;color:#fff}
      .tg-app-back{width:28px;height:28px;background:#333;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:300}
      .tg-app-cover{position:relative;margin:8px 14px;height:0;padding-bottom:50%;border-radius:14px;overflow:hidden;background:url('data:image/jpeg;base64,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') center/cover no-repeat}
      .tg-app-cover-gradient{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.6) 100%)}
      .tg-app-cover-skyline{position:absolute;bottom:0;left:0;right:0;height:80px}
      .tg-app-info{text-align:center;padding:12px 16px 4px}
      .tg-app-title{font-size:20px;font-weight:800;letter-spacing:-0.5px;margin-bottom:4px}
      .tg-app-date{font-size:12px;color:#919191;margin-bottom:4px}
      .tg-app-members-link{font-size:12px;color:#2ab26e;font-weight:500}
      .tg-app-desc-card{margin:10px 14px;background:#1a1a1a;border-radius:12px;padding:12px 14px}
      .tg-app-actions{display:flex;gap:8px;padding:10px 14px}
      .tg-app-action-btn{flex:1;background:#1a1a1a;border-radius:12px;padding:12px 4px;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:10px;color:#2ab26e;font-weight:500}
      .tg-app-bottom-nav{margin-top:auto;background:#1a1a1a;border:1px solid #2ab26e33;border-radius:22px;margin:10px 14px 14px;padding:12px 0;display:flex;justify-content:space-around;align-items:center}
      .tg-float-card{position:absolute;background:#171717;border:1px solid #2a2a2a;border-radius:14px;padding:14px 16px;box-shadow:0 12px 40px rgba(0,0,0,0.6);z-index:15;transition:transform 0.3s ease}
      .tg-float-card:hover{transform:scale(1.03)}
      .tg-float-flight{top:30px;left:calc(50% - 410px);width:260px;animation:floatIn 0.8s ease 0.7s both}
      .tg-flight-route{display:flex;align-items:center;gap:12px;margin-bottom:8px}
      .tg-flight-code{font-weight:800;font-size:22px;letter-spacing:-0.5px}
      .tg-flight-line{flex:1;height:2px;background:linear-gradient(90deg,#2ab26e,#6cf4b0);border-radius:2px;position:relative}
      .tg-flight-line::after{content:'✈';position:absolute;right:-4px;top:-10px;font-size:14px;color:#2ab26e}
      .tg-flight-meta{display:flex;justify-content:space-between;font-size:12px;color:#919191}
      .tg-flight-badge{display:inline-block;background:rgba(42,178,110,0.1);color:#2ab26e;font-size:11px;font-weight:600;padding:3px 10px;border-radius:100px;margin-top:8px}
      .tg-float-expenses{top:30px;right:calc(50% - 370px);width:220px;animation:floatIn 0.8s ease 0.85s both}
      .tg-expense-header{display:flex;align-items:center;gap:8px;margin-bottom:14px;font-weight:700;font-size:14px}
      .tg-expense-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #222;font-size:13px}
      .tg-expense-row:last-child{border-bottom:none;font-weight:700}
      .tg-expense-row .label{color:#919191;display:flex;align-items:center;gap:6px}
      .tg-expense-row .amount{color:#fff}
      .tg-expense-total{color:#2ab26e !important;font-size:15px}
      .tg-float-members{bottom:100px;left:calc(50% - 380px);width:240px;animation:floatIn 0.8s ease 1s both}
      .tg-member-header{font-weight:700;font-size:14px;margin-bottom:12px;display:flex;align-items:center;gap:8px}
      .tg-member-row{display:flex;align-items:center;gap:10px;padding:8px 0}
      .tg-member-avatar{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#0a0a0a}
      .tg-member-name{font-size:13px;font-weight:500}
      .tg-member-status{margin-left:auto;font-size:11px;font-weight:600;padding:3px 10px;border-radius:100px}
      .tg-status-accepted{background:rgba(42,178,110,0.15);color:#2ab26e}
      .tg-status-pending{background:rgba(229,155,11,0.15);color:#e59b0b}
      .tg-status-host{background:rgba(229,155,11,0.2);color:#e6b555}
      .tg-float-itinerary{bottom:80px;right:calc(50% - 410px);width:260px;animation:floatIn 0.8s ease 1.15s both}
      .tg-itin-header{font-weight:700;font-size:14px;margin-bottom:12px;display:flex;align-items:center;gap:8px}
      .tg-itin-item{display:flex;align-items:center;gap:10px;padding:7px 0;font-size:13px;border-bottom:1px solid #222;white-space:nowrap}
      .tg-itin-item:last-child{border-bottom:none}
      .tg-itin-icon{width:28px;height:28px;border-radius:8px;background:#262626;display:flex;align-items:center;justify-content:center;font-size:13px}
      .tg-itin-time{margin-left:auto;color:#919191;font-size:12px}
      .tg-features{padding:100px 40px;max-width:1100px;margin:0 auto}
      .tg-features-header{text-align:center;margin-bottom:56px}
      .tg-features-header h2{font-size:clamp(30px,4.5vw,48px);font-weight:800;letter-spacing:-2px;margin-bottom:14px}
      .tg-features-header p{color:#919191;font-size:16px;max-width:480px;margin:0 auto;line-height:1.6}
      .tg-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
      .tg-feature-card{background:#131313;border:1px solid #1e1e1e;border-radius:18px;padding:32px 24px;transition:all 0.35s;cursor:default;text-align:center}
      .tg-feature-card:hover{border-color:rgba(42,178,110,0.25);transform:translateY(-3px);box-shadow:0 16px 32px rgba(0,0,0,0.3)}
      .tg-feature-icon{font-size:28px;margin-bottom:16px;display:block}
      .tg-feature-card h3{font-weight:700;font-size:16px;margin-bottom:8px;letter-spacing:-0.3px}
      .tg-feature-card p{color:#757575;font-size:13px;line-height:1.6}
      .tg-showcase{padding:60px 40px;max-width:1100px;margin:0 auto}
      .tg-showcase-row{display:flex;align-items:center;gap:70px;margin-bottom:100px}
      .tg-showcase-row.reverse{flex-direction:row-reverse}
      .tg-showcase-text{flex:1}
      .tg-showcase-text .label{font-size:12px;font-weight:600;color:#2ab26e;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px}
      .tg-showcase-text h2{font-size:clamp(26px,3.5vw,36px);font-weight:800;letter-spacing:-1.2px;margin-bottom:14px;line-height:1.1}
      .tg-showcase-text p{color:#919191;font-size:15px;line-height:1.7}
      .tg-ss-phone{width:270px;height:540px;background:#0d0d0d;border-radius:38px;border:3px solid #333;overflow:hidden;position:relative;box-shadow:0 30px 60px rgba(0,0,0,0.5);display:flex;flex-direction:column}
      .tg-ss-phone::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:110px;height:28px;background:#000;border-radius:0 0 16px 16px;z-index:10}
      .tg-ss-phone img{width:100%;height:100%;object-fit:cover;object-position:top}
      .tg-bottom-cta{padding:100px 40px;text-align:center;position:relative}
      .tg-bottom-cta::before{content:'';position:absolute;bottom:100px;left:50%;transform:translateX(-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(42,178,110,0.06) 0%,transparent 70%);pointer-events:none}
      .tg-bottom-cta h2{font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:-2px;margin-bottom:14px}
      .tg-bottom-cta p{color:#919191;font-size:16px;margin-bottom:32px}
      .tg-footer{border-top:1px solid #161616;padding:44px 40px;max-width:1100px;margin:0 auto}
      .tg-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;margin-bottom:36px}
      .tg-footer-brand{display:flex;flex-direction:column;gap:10px}
      .tg-footer-brand p{color:#555;font-size:13px;line-height:1.5;max-width:260px}
      .tg-footer-col h4{font-weight:600;font-size:12px;color:#777;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
      .tg-footer-col a{display:block;color:#555;text-decoration:none;font-size:13px;margin-bottom:9px;transition:color 0.2s}
      .tg-footer-col a:hover{color:#2ab26e}
      .tg-footer-bottom{border-top:1px solid #161616;padding-top:20px;display:flex;justify-content:space-between}
      .tg-footer-bottom p{color:#555;font-size:12px}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes fadeInUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      @keyframes floatIn{from{opacity:0;transform:translateY(20px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
      .tg-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.2s ease;overflow:hidden;touch-action:none}
      .tg-modal{background:#141414;border:1px solid #262626;border-radius:20px;max-width:640px;width:100%;max-height:80vh;overflow:hidden;position:relative;animation:fadeInUp 0.3s ease;display:flex;flex-direction:column}
      .tg-modal-header{position:sticky;top:0;background:#141414;padding:20px 24px 16px;border-bottom:1px solid #1e1e1e;display:flex;justify-content:space-between;align-items:center;z-index:1}
      .tg-modal-header h3{font-size:18px;font-weight:700;letter-spacing:-0.5px}
      .tg-modal-close{width:32px;height:32px;border-radius:50%;background:#262626;border:none;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s}
      .tg-modal-close:hover{background:#333}
      .tg-modal-body{padding:20px 24px 28px;font-size:13px;line-height:1.7;color:#aaa;overflow-y:auto;flex:1;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
      .tg-modal-body h4{color:#fff;font-size:15px;font-weight:700;margin:20px 0 8px;letter-spacing:-0.3px}
      .tg-modal-body h4:first-child{margin-top:0}
      .tg-modal-body p{margin-bottom:12px}
      .tg-modal::-webkit-scrollbar{width:6px}.tg-modal::-webkit-scrollbar-track{background:transparent}.tg-modal::-webkit-scrollbar-thumb{background:#333;border-radius:3px}
      .tg-footer-col a.clickable{cursor:pointer}.tg-footer-col a.disabled{cursor:default;pointer-events:none}
      @media(max-width:1000px){.tg-showcase-hero{transform:scale(0.7);transform-origin:top center;margin-bottom:-180px}.tg-features-grid{grid-template-columns:repeat(2,1fr)}.tg-showcase-row,.tg-showcase-row.reverse{flex-direction:column;gap:36px}.tg-footer-grid{grid-template-columns:1fr 1fr}}
      @media(max-width:700px){.tg-showcase-hero{transform:scale(0.5);margin-bottom:-300px}.tg-features-grid{grid-template-columns:1fr}}
      @media(max-width:600px){.tg-showcase-hero{transform:scale(0.45);margin-bottom:-340px}.tg-footer-grid{grid-template-columns:1fr}.tg-nav{padding:12px 20px}.tg-hero{padding:100px 20px 30px}}
    `}</style>

    <nav className="tg-nav">
      <div className="tg-logo">
        <div className="tg-logo-icon">Tú</div>
        <div className="tg-logo-text"><span>Tú</span>Gather</div>
      </div>
      <a href={APP_STORE_LINK} className="tg-nav-cta">Get the App</a>
    </nav>

    <section className="tg-hero">
      <div className="tg-hero-badge">✨ Now available on the App Store</div>
      <h1><span className="green">Tú</span>Gather</h1>
      <p className="tg-hero-tagline">The World's First Truly Social Media</p>
      <p className="tg-hero-sub">Your go-to app for planning and organizing events with friends and family. Trips, parties, weddings, and everything in between.</p>
      <a href={APP_STORE_LINK} className="tg-cta-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Download on the App Store
      </a>

      <div className="tg-showcase-hero">
        <div className="tg-float-card tg-float-flight">
          <div className="tg-flight-route">
            <div><div className="tg-flight-code">JFK</div><div style={{fontSize:11,color:'#919191'}}>New York</div></div>
            <div className="tg-flight-line"></div>
            <div style={{textAlign:'right'}}><div className="tg-flight-code">LAX</div><div style={{fontSize:11,color:'#919191'}}>Los Angeles</div></div>
          </div>
          <div className="tg-flight-meta"><span>6:30 AM</span><span>9:45 AM</span></div>
          <div className="tg-flight-badge">United UA482 · 5h 15m · Nonstop</div>
        </div>

        <div className="tg-float-card tg-float-expenses">
          <div className="tg-expense-header">💰 Expenses</div>
          <div className="tg-expense-row"><span className="label">🍕 Dinner</span><span className="amount">$85.00</span></div>
          <div className="tg-expense-row"><span className="label">🚕 Uber</span><span className="amount">$32.50</span></div>
          <div className="tg-expense-row"><span className="label">🎟️ Tickets</span><span className="amount">$120.00</span></div>
          <div className="tg-expense-row"><span className="label" style={{color:'#fff',fontWeight:600}}>Total</span><span className="amount tg-expense-total">$237.50</span></div>
        </div>

        <div className="tg-center-phone">
          <div className="tg-app-screen">
            {/* Status bar */}
            <div className="tg-sb"><span style={{fontWeight:600}}>9:41</span><div style={{display:'flex',gap:4,alignItems:'center'}}><span style={{fontSize:10}}>●●●●</span><span style={{fontSize:10}}>📶</span><span style={{fontSize:9,background:'#2ab26e',padding:'1px 5px',borderRadius:4,fontWeight:700}}>87</span></div></div>
            {/* Header */}
            <div className="tg-app-header">
              <div className="tg-app-back">‹</div>
              <span style={{fontWeight:600,fontSize:15}}>Event Detail</span>
              <div style={{width:28}}></div>
            </div>
            {/* Cover image - NYC skyline gradient */}
            <div className="tg-app-cover">
              <div className="tg-app-cover-gradient"></div>
              <div className="tg-app-cover-skyline">
                {/* NYC skyline silhouette */}
                <svg viewBox="0 0 280 80" style={{position:'absolute',bottom:0,left:0,width:'100%',opacity:0.6}}>
                  <rect x="20" y="30" width="12" height="50" fill="#1a1a1a"/>
                  <rect x="35" y="15" width="8" height="65" fill="#1a1a1a"/>
                  <rect x="46" y="25" width="14" height="55" fill="#1a1a1a"/>
                  <rect x="63" y="10" width="10" height="70" fill="#1a1a1a"/>
                  <rect x="76" y="35" width="16" height="45" fill="#1a1a1a"/>
                  <rect x="95" y="5" width="12" height="75" fill="#1a1a1a"/>
                  <rect x="95" y="0" width="4" height="5" fill="#1a1a1a"/>
                  <rect x="110" y="20" width="18" height="60" fill="#1a1a1a"/>
                  <rect x="131" y="8" width="10" height="72" fill="#1a1a1a"/>
                  <rect x="144" y="28" width="14" height="52" fill="#1a1a1a"/>
                  <rect x="161" y="12" width="11" height="68" fill="#1a1a1a"/>
                  <rect x="175" y="22" width="16" height="58" fill="#1a1a1a"/>
                  <rect x="194" y="6" width="9" height="74" fill="#1a1a1a"/>
                  <rect x="206" y="30" width="14" height="50" fill="#1a1a1a"/>
                  <rect x="223" y="18" width="12" height="62" fill="#1a1a1a"/>
                  <rect x="238" y="32" width="10" height="48" fill="#1a1a1a"/>
                  <rect x="251" y="25" width="15" height="55" fill="#1a1a1a"/>
                </svg>
              </div>
            </div>
            {/* Event info */}
            <div className="tg-app-info">
              <div className="tg-app-title">LA Weekend</div>
              <div className="tg-app-date">📅 May 16 - May 18</div>
              <div className="tg-app-members-link">4 members · 3 in chat</div>
            </div>
            {/* Description card */}
            <div className="tg-app-desc-card">
              <div style={{color:'#919191',fontSize:11,marginBottom:4,display:'flex',alignItems:'center',gap:5}}>📋 Description</div>
              <div style={{fontSize:12,lineHeight:1.4}}>Courtside seats, rooftop vibes,<br/>and tacos on every corner. 🌴</div>
            </div>
            {/* Action buttons */}
            <div className="tg-app-actions">
              <div className="tg-app-action-btn">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" stroke="#2ab26e" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M32 32v432a16 16 0 0016 16h432"/><rect x="96" y="224" width="80" height="192" rx="20" ry="20"/><rect x="240" y="176" width="80" height="240" rx="20" ry="20"/><rect x="383.64" y="112" width="80" height="304" rx="20" ry="20"/></svg>
                <span style={{fontSize:9,whiteSpace:'nowrap'}}>Polls</span>
              </div>
              <div className="tg-app-action-btn">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" stroke="#2ab26e" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M176 312c-24.26-9.26-58.51-14-80-14-55.23 0-100 35.81-100 80"/><circle cx="96" cy="216" r="56"/><line x1="344" y1="256" x2="344" y2="400"/><line x1="272" y1="328" x2="416" y2="328"/></svg>
                <span style={{fontSize:9,whiteSpace:'nowrap'}}>Add Guest</span>
              </div>
              <div className="tg-app-action-btn">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" stroke="#2ab26e" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><rect x="48" y="96" width="416" height="320" rx="16"/><path d="M48 192h416"/><path d="M128 96V56"/><path d="M384 96V56"/><path d="M48 288h144"/><path d="M320 288h144"/></svg>
                <span style={{fontSize:9,whiteSpace:'nowrap'}}>Expenses</span>
              </div>
              <div className="tg-app-action-btn">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" stroke="#2ab26e" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M432 112V96a48 48 0 00-48-48H128a48 48 0 00-48 48v320a48 48 0 0048 48h256a48 48 0 0048-48V112z"/><rect x="112" y="112" width="288" height="192" rx="8"/><circle cx="256" cy="392" r="24"/></svg>
                <span style={{fontSize:9,whiteSpace:'nowrap'}}>Media</span>
              </div>
            </div>
            {/* Bottom nav */}
            <div className="tg-app-bottom-nav">
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none" stroke="#5a5a5a" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256"/></svg>
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none" stroke="#2ab26e" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"/></svg>
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none" stroke="#5a5a5a" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><rect x="48" y="80" width="416" height="384" rx="16"/><line x1="128" y1="48" x2="128" y2="80"/><line x1="384" y1="48" x2="384" y2="80"/><line x1="48" y1="176" x2="464" y2="176"/></svg>
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none" stroke="#5a5a5a" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><rect x="32" y="128" width="448" height="320" rx="48"/><path d="M208 128V96a48 48 0 0196 0v32"/></svg>
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none" stroke="#5a5a5a" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"><circle cx="256" cy="160" r="80"/><path d="M400 432c0-88.37-64.47-160-144-160s-144 71.63-144 160"/></svg>
            </div>
          </div>
        </div>

        <div className="tg-float-card tg-float-members">
          <div className="tg-member-header">👥 Members · 4</div>
          <div className="tg-member-row">
            <div className="tg-member-avatar" style={{background:'#2ab26e'}}>P</div>
            <span className="tg-member-name">Paul M.</span>
            <span className="tg-member-status tg-status-host">👑 Host</span>
          </div>
          <div className="tg-member-row">
            <div className="tg-member-avatar" style={{background:'#27a8ff'}}>D</div>
            <span className="tg-member-name">Daniel</span>
            <span className="tg-member-status tg-status-accepted">✓ Accepted</span>
          </div>
          <div className="tg-member-row">
            <div className="tg-member-avatar" style={{background:'#e59b0b'}}>M</div>
            <span className="tg-member-name">Maria</span>
            <span className="tg-member-status tg-status-pending">Pending</span>
          </div>
        </div>

        <div className="tg-float-card tg-float-itinerary">
          <div className="tg-itin-header">📋 Itinerary · Sat</div>
          <div className="tg-itin-item"><div className="tg-itin-icon">✈️</div><span>JFK → LAX</span><span className="tg-itin-time">6:30 AM</span></div>
          <div className="tg-itin-item"><div className="tg-itin-icon">🏨</div><span>The Standard</span><span className="tg-itin-time">12:00 PM</span></div>
          <div className="tg-itin-item"><div className="tg-itin-icon">🍽️</div><span>Nobu Malibu</span><span className="tg-itin-time">6:00 PM</span></div>
          <div className="tg-itin-item"><div className="tg-itin-icon">🏀</div><span>Lakers Game</span><span className="tg-itin-time">7:30 PM</span></div>
        </div>
      </div>
    </section>

    <section className="tg-features">
      <div className="tg-features-header">
        <h2>Everything your crew needs</h2>
        <p>From the first invite to the last photo, TuGather keeps your entire event organized in one place.</p>
      </div>
      <div className="tg-features-grid">
        {features.map((f, i) => (
          <div key={i} className="tg-feature-card">
            <span className="tg-feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="tg-showcase">
      <div className="tg-showcase-row">
        <div className="tg-showcase-text">
          <p className="label">Expense Splitting</p>
          <h2>Know who owes what. Always.</h2>
          <p>Track every dollar across the group. TuGather splits expenses equally or custom, shows running balances, and lets you settle up with one tap via Venmo, PayPal, Zelle, or Cash App.</p>
        </div>
        <div className="tg-showcase-phone"><div className="tg-ss-phone"><div className="tg-app-screen">
          <div className="tg-sb" style={{marginTop:28}}><span style={{fontWeight:600,fontSize:11}}>9:41</span><span style={{fontSize:9}}>●●●● 📶</span></div>
          <div className="tg-app-header"><div className="tg-app-back">‹</div><span style={{fontWeight:600,fontSize:14}}>Expenses</span><div style={{width:28}}></div></div>
          <div style={{margin:'6px 12px',background:'#1a3a2a',borderRadius:10,padding:'8px 12px',fontSize:11,color:'#2ab26e',display:'flex',alignItems:'center',gap:6}}>🔔 You're owed $45.00 — remind them ›</div>
          <div style={{margin:'8px 12px',background:'#1a1a1a',borderRadius:14,padding:'16px 14px'}}>
            <div style={{fontSize:10,color:'#919191',marginBottom:4}}>YOUR BALANCE</div>
            <div style={{fontSize:32,fontWeight:800,color:'#2ab26e',marginBottom:2}}>$45.00</div>
            <div style={{fontSize:11,color:'#919191',marginBottom:12}}>You are owed</div>
            <div style={{background:'#2ab26e',borderRadius:10,padding:'10px',textAlign:'center',fontWeight:700,fontSize:13,color:'#0a0a0a',marginBottom:12}}>Settle Up</div>
            <div style={{borderTop:'1px solid #262626',paddingTop:10,display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:28,height:28,borderRadius:'50%',background:'#27a8ff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,color:'#0a0a0a'}}>D</div>
              <span style={{fontSize:12,fontWeight:500}}>Daniel</span>
              <span style={{marginLeft:'auto',fontSize:13,fontWeight:700,color:'#2ab26e'}}>+$45.00</span>
            </div>
          </div>
          <div style={{display:'flex',gap:8,margin:'8px 12px'}}>
            <div style={{flex:1,background:'#1a1a1a',borderRadius:12,padding:'12px 8px',textAlign:'center'}}><div style={{fontSize:18,fontWeight:800}}>3</div><div style={{fontSize:10,color:'#919191'}}>Expenses</div></div>
            <div style={{flex:1,background:'#1a1a1a',borderRadius:12,padding:'12px 8px',textAlign:'center'}}><div style={{fontSize:18,fontWeight:800,color:'#2ab26e'}}>$120.00</div><div style={{fontSize:10,color:'#919191'}}>Total Spent</div></div>
          </div>
          <div style={{margin:'8px 12px',fontSize:12,fontWeight:700}}>All Expenses</div>
          {[{e:'🍽️',n:'Dinner at Nobu',w:'Paid by Daniel',a:'$80.00'},{e:'🚕',n:'Uber to Hotel',w:'Paid by you',a:'$25.00'},{e:'🎟️',n:'Show Tickets',w:'Paid by you',a:'$15.00'}].map((x,i)=>(
            <div key={i} style={{margin:'4px 12px',background:'#1a1a1a',borderRadius:10,padding:'10px 12px',display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:32,height:32,borderRadius:8,background:'#262626',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15}}>{x.e}</div>
              <div><div style={{fontSize:12,fontWeight:600}}>{x.n}</div><div style={{fontSize:10,color:'#919191'}}>{x.w}</div></div>
              <span style={{marginLeft:'auto',fontSize:12,fontWeight:600}}>{x.a}</span>
            </div>
          ))}
        </div></div></div>
      </div>
      <div className="tg-showcase-row reverse">
        <div className="tg-showcase-text">
          <p className="label">Travel Planning</p>
          <h2>Everyone's flights and hotels in one place.</h2>
          <p>Add flight details with real-time lookup, hotel check-in dates, and ground transportation. Everyone in the group sees the full travel picture.</p>
        </div>
        <div className="tg-showcase-phone"><div className="tg-ss-phone"><div className="tg-app-screen">
          <div className="tg-sb" style={{marginTop:28}}><span style={{fontWeight:600,fontSize:11}}>9:41</span><span style={{fontSize:9}}>●●●● 📶</span></div>
          <div className="tg-app-header"><div className="tg-app-back">‹</div><span style={{fontWeight:600,fontSize:14}}>Flights & Hotels</span><div style={{width:28}}></div></div>
          <div style={{display:'flex',margin:'8px 12px',background:'#1a1a1a',borderRadius:10,overflow:'hidden'}}>
            <div style={{flex:1,padding:'10px',textAlign:'center',background:'#1a3a2a',fontSize:12,fontWeight:600,color:'#2ab26e'}}>✈️ Flights <span style={{background:'#2ab26e',color:'#0a0a0a',borderRadius:10,padding:'1px 6px',fontSize:10,fontWeight:700,marginLeft:4}}>2</span></div>
            <div style={{flex:1,padding:'10px',textAlign:'center',fontSize:12,color:'#919191'}}>🏨 Hotels <span style={{background:'#333',borderRadius:10,padding:'1px 6px',fontSize:10,marginLeft:4}}>1</span></div>
          </div>
          {[{from:'JFK',fromCity:'New York',to:'LAX',toCity:'Los Angeles',time:'5h 15m',dep:'6:30 AM',arr:'9:45 AM',airline:'United · UA482',who:'Paul M.',color:'#2ab26e'},{from:'EWR',fromCity:'Newark',to:'LAX',toCity:'Los Angeles',time:'5h 40m',dep:'8:15 AM',arr:'11:55 AM',airline:'United · UA1187',who:'Daniel',color:'#27a8ff'}].map((f,i)=>(
            <div key={i} style={{margin:'8px 12px',background:'#1a1a1a',border:'1px solid #262626',borderRadius:14,padding:'14px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <div style={{fontSize:11,color:'#2ab26e'}}>✈️ {f.airline}</div>
                <div style={{display:'flex',alignItems:'center',gap:5,background:'#262626',borderRadius:20,padding:'3px 8px'}}><div style={{width:18,height:18,borderRadius:'50%',background:f.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,color:'#0a0a0a'}}>{f.who[0]}</div><span style={{fontSize:10,color:'#bbb'}}>{f.who}</span></div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div><div style={{fontSize:22,fontWeight:800,letterSpacing:-1}}>{f.from}</div><div style={{fontSize:10,color:'#919191'}}>{f.dep}</div></div>
                <div style={{flex:1,textAlign:'center'}}><div style={{fontSize:11,color:'#2ab26e',fontWeight:600}}>{f.time}</div><div style={{height:2,background:'linear-gradient(90deg,#2ab26e,#6cf4b0)',borderRadius:2,margin:'4px 0'}}></div><div style={{fontSize:10,color:'#919191'}}>Nonstop</div></div>
                <div style={{textAlign:'right'}}><div style={{fontSize:22,fontWeight:800,letterSpacing:-1}}>{f.to}</div><div style={{fontSize:10,color:'#919191'}}>{f.arr}</div></div>
              </div>
            </div>
          ))}
        </div></div></div>
      </div>
      <div className="tg-showcase-row">
        <div className="tg-showcase-text">
          <p className="label">Guest Management</p>
          <h2>Invite, track, and manage your crew.</h2>
          <p>Send invitations via SMS or email, see who's in and who's still deciding, and nudge the stragglers with one-tap reminders.</p>
        </div>
        <div className="tg-showcase-phone"><div className="tg-ss-phone">
          <div style={{padding:'36px 0 0',display:'flex',flexDirection:'column',height:'100%',fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#fff'}}>
            {/* Status bar */}
            <div style={{display:'flex',justifyContent:'space-between',padding:'4px 20px',fontSize:11}}><span style={{fontWeight:600}}>9:41</span><span style={{fontSize:9}}>●●●● 📶</span></div>
            {/* Header */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 16px'}}>
              <div style={{width:28,height:28,background:'#333',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:300}}>‹</div>
              <span style={{fontWeight:600,fontSize:15}}>Members</span>
              <div style={{width:28}}></div>
            </div>
            {/* Count */}
            <div style={{padding:'4px 18px 10px',fontSize:12,color:'#2ab26e',fontWeight:500}}>4 Members</div>
            {/* Member rows using table */}
            <div style={{padding:'0 14px',flex:1}}>
              <table style={{width:'100%',borderCollapse:'separate',borderSpacing:'0 5px'}}>
                <tbody>
                  {/* Paul - Host */}
                  <tr><td colSpan={3} style={{padding:0}}><div style={{background:'rgba(42,178,110,0.05)',border:'1.5px solid rgba(42,178,110,0.4)',borderRadius:12,padding:'10px 12px'}}>
                    <table style={{width:'100%'}}><tbody><tr>
                      <td style={{width:36,verticalAlign:'middle'}}><div style={{width:34,height:34,borderRadius:'50%',background:'#2ab26e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'#0a0a0a'}}>P</div></td>
                      <td style={{verticalAlign:'middle',paddingLeft:8}}><div style={{fontSize:13,fontWeight:700}}>Paul M.</div><div style={{fontSize:10,color:'#2ab26e',marginTop:1}}>✅ App User</div></td>
                      <td style={{verticalAlign:'middle',textAlign:'right',width:70}}><span style={{fontSize:9,fontWeight:600,background:'rgba(229,181,85,0.2)',color:'#e6b555',padding:'3px 8px',borderRadius:8}}>👑 Host</span></td>
                    </tr></tbody></table>
                  </div></td></tr>
                  {/* Daniel */}
                  <tr><td colSpan={3} style={{padding:0}}><div style={{background:'#1a1a1a',border:'1px solid #262626',borderRadius:12,padding:'10px 12px'}}>
                    <table style={{width:'100%'}}><tbody><tr>
                      <td style={{width:36,verticalAlign:'middle'}}><div style={{width:34,height:34,borderRadius:'50%',background:'#27a8ff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'#0a0a0a'}}>D</div></td>
                      <td style={{verticalAlign:'middle',paddingLeft:8}}><div style={{fontSize:13,fontWeight:700}}>Daniel</div><div style={{fontSize:10,color:'#2ab26e',marginTop:1}}>✅ App User</div></td>
                      <td style={{verticalAlign:'middle',textAlign:'right',width:70}}><span style={{fontSize:9,fontWeight:600,background:'rgba(42,178,110,0.15)',color:'#2ab26e',padding:'3px 8px',borderRadius:8}}>✓ Accepted</span></td>
                    </tr></tbody></table>
                  </div></td></tr>
                  {/* Maria */}
                  <tr><td colSpan={3} style={{padding:0}}><div style={{background:'#1a1a1a',border:'1px solid #262626',borderRadius:12,padding:'10px 12px'}}>
                    <table style={{width:'100%'}}><tbody><tr>
                      <td style={{width:36,verticalAlign:'middle'}}><div style={{width:34,height:34,borderRadius:'50%',background:'#e59b0b',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'#0a0a0a'}}>M</div></td>
                      <td style={{verticalAlign:'middle',paddingLeft:8}}><div style={{fontSize:13,fontWeight:700}}>Maria</div><div style={{fontSize:10,color:'#2ab26e',marginTop:1}}>✅ App User</div></td>
                      <td style={{verticalAlign:'middle',textAlign:'right',width:70}}><span style={{fontSize:9,fontWeight:600,background:'rgba(229,155,11,0.15)',color:'#e59b0b',padding:'3px 8px',borderRadius:8}}>Pending</span></td>
                    </tr></tbody></table>
                  </div></td></tr>
                  {/* Chris */}
                  <tr><td colSpan={3} style={{padding:0}}><div style={{background:'#1a1a1a',border:'1px solid #262626',borderRadius:12,padding:'10px 12px'}}>
                    <table style={{width:'100%'}}><tbody><tr>
                      <td style={{width:36,verticalAlign:'middle'}}><div style={{width:34,height:34,borderRadius:'50%',background:'#656565',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'#0a0a0a'}}>C</div></td>
                      <td style={{verticalAlign:'middle',paddingLeft:8}}><div style={{fontSize:13,fontWeight:700}}>Chris</div><div style={{fontSize:10,color:'#919191',marginTop:1}}>📱 SMS Invite</div></td>
                      <td style={{verticalAlign:'middle',textAlign:'right',width:70}}><span style={{fontSize:9,fontWeight:600,background:'rgba(101,101,101,0.15)',color:'#919191',padding:'3px 8px',borderRadius:8}}>Sent</span></td>
                    </tr></tbody></table>
                  </div></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div></div>
      </div>
    </section>

    <section className="tg-bottom-cta">
      <h2>Your next event<br/>starts <span style={{color:'#2ab26e'}}>here</span></h2>
      <p>Available on iPhone. Android coming soon.</p>
      <a href={APP_STORE_LINK} className="tg-cta-btn" style={{opacity:1,animation:'none'}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Download on the App Store
      </a>
    </section>

    <footer className="tg-footer">
      <div className="tg-footer-grid">
        <div className="tg-footer-brand">
          <div className="tg-logo">
            <div className="tg-logo-icon" style={{width:28,height:28,fontSize:11,borderRadius:7}}>Tú</div>
            <div className="tg-logo-text" style={{fontSize:16}}><span style={{color:'#2ab26e'}}>Tú</span>Gather</div>
          </div>
          <p>Your go-to app for planning and organizing events with friends and family.</p>
        </div>
        <div className="tg-footer-col"><h4>Product</h4><a className="disabled">Features</a><a className="disabled">Download</a><a className="disabled">Updates</a></div>
        <div className="tg-footer-col"><h4>Company</h4><a className="disabled">About</a><a className="disabled">Press</a><a className="disabled">Contact</a></div>
        <div className="tg-footer-col"><h4>Legal</h4><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Service</a></div>
      </div>
      <div className="tg-footer-bottom">
        <p>&copy; 2026 TuGather. All rights reserved.</p>
        <p>Made with 💚</p>
      </div>
    </footer>

  </div>);
}
