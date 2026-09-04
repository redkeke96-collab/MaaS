대구 MaaS 이용가이드 PWA

파일
- index.html
- manifest.json
- service-worker.js
- icon.svg

배포 방법
1. 폴더 전체를 GitHub Pages 또는 HTTPS 웹서버에 업로드합니다.
2. index.html에 접속합니다.
3. iPhone: Safari 공유 → 홈 화면에 추가
4. Android: Chrome 메뉴 → 앱 설치/홈 화면에 추가

주의
Service Worker 때문에 로컬 file:// 실행만으로는 PWA 설치/오프라인 기능이 정상 작동하지 않습니다.
HTTPS 또는 localhost 환경에서 테스트하세요.

현재 버전은 기능 구조 중심의 1차 시제품입니다.
실제 MaaS 앱 화면 캡처를 추가하면 정식 사용설명서 형태로 고도화할 수 있습니다.
