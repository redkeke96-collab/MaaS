const guides = [
  {
    id:"start", icon:"👋", title:"시작하기", subtitle:"로그인 · 접근 권한 · 약관동의",
    steps:[
      "앱스토어에서 ‘대구 MaaS’를 설치하고 실행해요.",
      "카카오 또는 네이버 계정으로 로그인해요.",
      "위치·알림 등 필요한 접근 권한을 허용해요.",
      "서비스 이용약관에 동의해요. 만 14세 미만은 법정대리인 동의가 필요해요."
    ]
  },
  {
    id:"home", icon:"🗺️", title:"홈 화면", subtitle:"지도와 정보카드 활용",
    steps:[
      "상단 지도에서 현재 위치와 교통정보를 확인해요.",
      "하단 정보카드를 위로 밀면 실시간 운행정보·이벤트·최근 목적지를 볼 수 있어요.",
      "도시철도·버스·DRT·자전거 버튼으로 바로 이동할 수 있어요.",
      "날씨·도로소통정보·공영주차장도 지도에서 확인할 수 있어요."
    ]
  },
  {
    id:"route", icon:"🧭", title:"길찾기", subtitle:"출발지와 목적지만 입력하면 경로 안내",
    steps:[
      "홈 화면의 ‘어디로 갈까요?’를 터치해요.",
      "출발지와 도착지를 입력해요.",
      "전체 또는 원하는 교통수단을 선택해요.",
      "정렬기준에서 원하는 기준으로 길안내를 받아요.",
      "교통약자 경로안내를 켜면 계단 없는 경로·저상버스 기준 안내를 확인할 수 있어요."
    ]
  },
  {
    id:"rail", icon:"🚇", title:"도시철도", subtitle:"노선검색 · 최단경로 · 즐겨찾기",
    steps:[
      "도시철도 메뉴를 선택해요.",
      "출발역과 도착역을 검색해요.",
      "최단경로 또는 최소환승 경로를 확인해요.",
      "자주 쓰는 경로는 즐겨찾기에 저장해요."
    ]
  },
  {
    id:"bus", icon:"🚌", title:"버스", subtitle:"노선·정류장 검색과 실시간 정보",
    steps:[
      "버스 메뉴를 터치해요.",
      "버스 또는 정류장을 선택해 검색해요.",
      "버스 번호나 정류장명을 입력해요.",
      "상세 정류장 정보와 실시간 버스 이동 정보를 확인해요."
    ]
  },
  {
    id:"mypage", icon:"👤", title:"마이페이지", subtitle:"내 정보 · 이용기록 · 쿠폰 · 문의",
    steps:[
      "내정보와 프로필을 확인·변경할 수 있어요.",
      "DRT·자전거 이용내역과 결제내역을 확인해요.",
      "쿠폰·즐겨찾기·공지사항·FAQ를 관리해요.",
      "문의하기에서 담당자에게 문의할 수 있어요."
    ]
  },
  {
    id:"card", icon:"💳", title:"모바일 교통카드", subtitle:"발급 · 충전 · 마일리지 전환",
    steps:[
      "홈 오른쪽 위 교통카드 아이콘을 터치해요.",
      "신청하기 → 본인인증 → 약관동의 순서로 발급해요.",
      "충전하기에서 결제수단과 금액을 선택해 충전해요.",
      "보유 마일리지는 교통카드 금액으로 전환할 수 있어요."
    ]
  },
  {
    id:"drt", icon:"🚐", title:"DRT 이용", subtitle:"출도착지 선택부터 차량 호출까지",
    steps:[
      "홈 화면에서 DRT를 선택해요.",
      "출발지와 도착지를 입력해요.",
      "도착시간을 확인해 차량과 탑승인원을 선택해요.",
      "‘차량호출하기’를 눌러 배차를 요청해요.",
      "하차 시 차량 내 결제 단말기로 결제해요."
    ]
  },
  {
    id:"bike", icon:"🚲", title:"공유자전거", subtitle:"대여 · QR 스캔 · 반납",
    steps:[
      "홈 화면에서 자전거를 선택해요.",
      "지도에서 대여할 자전거를 선택해요.",
      "결제카드를 확인하고 ‘대여하기’를 눌러요.",
      "자전거 QR을 스캔하고 탑승해요.",
      "도착 후 반납하기 → 하차지 촬영·등록 → 운행종료를 확인해요."
    ]
  },
  {
    id:"coupon", icon:"🎟️", title:"쿠폰", subtitle:"다운로드부터 매장 사용까지",
    steps:[
      "마이페이지에서 쿠폰을 선택해요.",
      "쿠폰받기에서 원하는 쿠폰을 다운로드해요.",
      "매장에서 사용할 쿠폰을 열어 직원에게 보여줘요.",
      "직원이 쿠폰암호를 입력하면 사용처리가 완료돼요."
    ]
  },
  {
    id:"qr", icon:"▣", title:"매장 QR 결제", subtitle:"교통카드 잔액으로 결제",
    steps:[
      "교통카드 페이지에서 QR을 터치해요.",
      "매장 카운터의 QR을 스캔해요.",
      "결제금액을 입력하고 결제하기를 터치해요.",
      "결제완료 화면을 확인해요."
    ]
  }
];

const guideList = document.getElementById("guideList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const dialog = document.getElementById("detailDialog");
const detailTitle = document.getElementById("detailTitle");
const detailSubtitle = document.getElementById("detailSubtitle");
const detailSteps = document.getElementById("detailSteps");

function renderGuides(items){
  guideList.innerHTML = items.map(g => `
    <button class="guide-card" data-id="${g.id}">
      <div class="guide-icon">${g.icon}</div>
      <div class="guide-copy">
        <strong>${g.title}</strong>
        <span>${g.subtitle}</span>
      </div>
      <b class="chev">›</b>
    </button>
  `).join("");

  emptyState.style.display = items.length ? "none" : "block";

  guideList.querySelectorAll("[data-id]").forEach(btn => {
    btn.addEventListener("click", () => openGuide(btn.dataset.id));
  });
}

function openGuide(id){
  const g = guides.find(x => x.id === id);
  if(!g) return;

  detailTitle.textContent = g.title;
  detailSubtitle.textContent = g.subtitle;
  detailSteps.innerHTML = g.steps.map((step, i) => `
    <div class="step">
      <div class="num">${i + 1}</div>
      <p>${step}</p>
    </div>
  `).join("");

  dialog.showModal();
}

document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => openGuide(btn.dataset.open));
});

document.querySelector("[data-home]").addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

document.querySelector("[data-search-focus]").addEventListener("click", () => {
  searchInput.focus();
  window.scrollTo({top:0, behavior:"smooth"});
});

document.getElementById("closeDialog").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", e => {
  if(e.target === dialog) dialog.close();
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();

  if(!q){
    renderGuides(guides);
    return;
  }

  const filtered = guides.filter(g =>
    `${g.title} ${g.subtitle} ${g.steps.join(" ")}`.toLowerCase().includes(q)
  );

  renderGuides(filtered);
});

renderGuides(guides);

if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(console.error);
  });
}
