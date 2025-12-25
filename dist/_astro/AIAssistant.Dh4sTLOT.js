function c(){const n=document.getElementById("ai-chat-window");if(n){const e=n.style.display==="none";n.style.display=e?"flex":"none",e&&document.getElementById("ai-input").focus();return}const d=document.createElement("style");d.textContent=`
    #ai-chat-window {
      position: fixed; bottom: 90px; right: 20px;
      width: 350px; height: 500px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      display: flex; flex-direction: column;
      font-family: system-ui, sans-serif;
      z-index: 999;
      opacity: 0; transform: translateY(20px);
      animation: ai-slide-in 0.3s forwards ease-out;
      border: 1px solid #e0e0e0;
    }
    @keyframes ai-slide-in {
      to { opacity: 1; transform: translateY(0); }
    }
    .ai-header {
      padding: 16px; background: #f4f4f5; border-bottom: 1px solid #ddd;
      border-radius: 12px 12px 0 0; font-weight: 600; display: flex; justify-content: space-between;
    }
    .ai-close-btn { cursor: pointer; background: none; border: none; font-size: 1.2rem; }
    .ai-messages {
      flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;
    }
    .ai-msg {
      max-width: 80%; padding: 10px 14px; border-radius: 10px; font-size: 0.95rem; line-height: 1.4;
    }
    .ai-msg.bot { background: #f0f0f0; align-self: flex-start; color: #333; }
    .ai-msg.user { background: #000; color: #fff; align-self: flex-end; }
    .ai-input-area {
      padding: 16px; border-top: 1px solid #eee; display: flex; gap: 8px;
    }
    #ai-input {
      flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px; outline: none;
    }
    #ai-input:focus { border-color: #000; }
    #ai-send {
      padding: 0 16px; background: #000; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;
    }
  `,document.head.appendChild(d);const t=document.createElement("div");t.id="ai-chat-window",t.innerHTML=`
    <div class="ai-header">
      <span>AI Assistant</span>
      <button class="ai-close-btn" aria-label="Close">&times;</button>
    </div>
    <div class="ai-messages" id="ai-messages">
      <div class="ai-msg bot">
        Hello! I'm loaded lazily. How can I help you today?
      </div>
    </div>
    <form class="ai-input-area" id="ai-form">
      <input type="text" id="ai-input" placeholder="Type a message..." autocomplete="off" />
      <button type="submit" id="ai-send">Send</button>
    </form>
  `,document.body.appendChild(t);const l=t.querySelector(".ai-close-btn"),p=document.getElementById("ai-form"),o=document.getElementById("ai-input"),a=document.getElementById("ai-messages");o.focus(),l.addEventListener("click",()=>{t.style.display="none"}),p.addEventListener("submit",e=>{e.preventDefault();const i=o.value.trim();i&&(r(i,"user"),o.value="",setTimeout(()=>{r("I am a static mock response. Connect me to an API!","bot")},600))});function r(e,i){const s=document.createElement("div");s.className=`ai-msg ${i}`,s.textContent=e,a.appendChild(s),a.scrollTop=a.scrollHeight}}export{c as initChat};
