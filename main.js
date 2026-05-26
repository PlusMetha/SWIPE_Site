// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
  });
});

// ===== HERO PARTICLES =====
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  particlesContainer.innerHTML = `
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>
  `;
}

// ===== REVEAL ON SCROLL ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply initial styles and observe
document.querySelectorAll('.solution-card, .service-box, .va-feature, .about-card, .hero-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
  revealObserver.observe(el);
});

// Helper for animation class
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// ===== MODAL SYSTEM DATA =====
const modalData = {
  cloud: {
    title: 'Cloud & IT Infrastructure',
    tag: 'Infrastructure',
    desc: 'ระบบโครงสร้างพื้นฐานไอทีระดับองค์กรที่ทันสมัย เน้นความยืดหยุ่น ความปลอดภัย และประสิทธิภาพสูงสุด',
    features: ['Hybrid Cloud Solutions', 'Infrastructure as Code', 'High Availability Design', '24/7 Monitoring']
  },
  'cloud-migration': {
    title: 'Cloud Migration',
    tag: 'Migration',
    desc: 'ย้ายระบบขึ้น Cloud อย่างปลอดภัย ไร้รอยต่อ ลดดาวน์ไทม์ และเพิ่มประสิทธิภาพการทำงาน',
    features: ['Readiness Assessment', 'Migration Roadmap', 'Data Integrity Security', 'Post-migration Support']
  },
  business: {
    title: 'Business Continuity',
    tag: 'Continuity',
    desc: 'วางแผนสำรองและกู้คืนระบบเพื่อให้ธุรกิจของคุณดำเนินต่อไปได้ไม่มีสะดุด แม้เกิดเหตุไม่คาดฝัน',
    features: ['Disaster Recovery Plan', 'Backup & Replication', 'Failover Systems', 'Risk Management']
  },
  security: {
    title: 'Enterprise Security',
    tag: 'Security',
    desc: 'การป้องกันความปลอดภัยระดับสูงสำหรับเครือข่ายและข้อมูลองค์กร (WAF, ADC, Next-Gen Access Control)',
    features: ['Application Firewall', 'Identity Management', 'Threat Detection', 'Compliance Audits']
  },
  patch: {
    title: 'Automated Patch Management',
    tag: 'Operations',
    desc: 'ระบบจัดการแพตช์อัตโนมัติ ลดความเสี่ยงจากช่องโหว่และประหยัดเวลาทีมไอที',
    features: ['Auto-Scanning', 'Scheduled Rollouts', 'Compliance Reporting', 'Vulnerability Analysis']
  },
  edge: {
    title: 'Edge-Device Management',
    tag: 'IoT',
    desc: 'ควบคุมและบริหารจัดการอุปกรณ์ปลายทางจำนวนมากได้อย่างมีประสิทธิภาพจากศูนย์กลาง',
    features: ['Remote Control', 'Firmware Updates', 'Device Telemetry', 'Security Policies']
  },
  appdev: {
    title: 'Application Development',
    tag: 'Development',
    desc: 'ออกแบบและพัฒนาซอฟต์แวร์ เว็บแอป และมือถือ ที่ตอบโจทย์ธุรกิจด้วยเทคโนโลยีล่าสุด',
    features: ['Web & Mobile Apps', 'E-Commerce Platforms', 'API Integration', 'UI/UX Design']
  },
  smartcity: {
    title: 'Smart City Solutions',
    tag: 'Smart City',
    desc: 'เปลี่ยนเมืองให้เป็นเมืองอัจฉริยะด้วยแพลตฟอร์มข้อมูลและการวิเคราะห์อัจฉริยะ (CDP, IOC)',
    features: ['City Data Platform', 'Intelligence Operation Center', 'Detection Sensors', 'Mobile Gov Apps']
  },
  voiceagent: {
    title: 'AI Voice Agent',
    tag: 'Premium AI',
    desc: 'นวัตกรรม AI Voice Agent ที่สื่อสารได้เหมือนมนุษย์ เชื่อมต่อระบบหลังบ้าน และทำงานได้ทันทีบนเว็บและแอป',
    features: ['Real-time Communication', 'API Connectivity', 'Automated Form Filling', 'Intent Analysis']
  }
};

function openModal(key) {
  const data = modalData[key];
  if (!data) return;
  
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  
  content.innerHTML = `
    <div class="m-header">
      <span class="section-label">${data.tag}</span>
      <h3 class="section-title" style="font-size: 2rem;">${data.title}</h3>
    </div>
    <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 25px;">${data.desc}</p>
    <ul class="sol-list" style="margin-bottom: 30px;">
      ${data.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <div style="display:flex; gap:15px;">
      <a href="#contact" class="btn-primary" onclick="closeModal()">สนใจโซลูชันนี้</a>
      <button class="btn-secondary" onclick="closeModal()">ปิด</button>
    </div>
  `;
  
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ขอบคุณที่สนใจบริการของ SWIPE! ทีมงานจะติดต่อกลับโดยเร็วที่สุด');
    contactForm.reset();
  });
}

// ===== DEMO PAGE FORM SUBMISSION =====
const aiDemoPageForm = document.getElementById('aiDemoPageForm');
if (aiDemoPageForm) {
  aiDemoPageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btnSubmit = document.getElementById('btnSubmitPageDemo');
    btnSubmit.innerText = 'Submitting... / กำลังส่งข้อมูล...';
    btnSubmit.disabled = true;

    const formData = new FormData(aiDemoPageForm);
    const url = 'https://script.google.com/macros/s/AKfycbzPuWp-0Tk8oCHXBj8N0vHkQgwOQ8G019FPzOtb4RQknlrgeribSGhvyg_VjjJh4em9/exec';
    
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      btnSubmit.innerText = 'Get Demo PIN / รับรหัสทดลองใช้งาน';
      btnSubmit.disabled = false;
      if (data.result === 'success') {
        document.getElementById('demoFormState').style.display = 'none';
        document.getElementById('demoSuccessState').style.display = 'block';
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error submitting form. Please try again.');
      btnSubmit.innerText = 'Get Demo PIN / รับรหัสทดลองใช้งาน';
      btnSubmit.disabled = false;
    });
  });
}
