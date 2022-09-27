# EMMA&ITA

PM 백규진

##### EMMA&ITA Version 0.2.1

본 문서는 RCS 파일추가 및 업데이트 이슈에 대해서 기술합니다.

추가적인 이슈사항에 대한 요청 및 문의 : 📨 kjbaek@i2max.co.kr

- 04M 14D Start

- 22Y 04M 14D OS Start

- 22Y 05M 19D OS Pub Done

---

#### Version 0.2.1

- HTML

  - index.html-삭제
  - PPT05.html
  - PPT06.html
  - PPT08.09.10.html
  - PPT11.html
  - PPT12.html
  - PPT13.html
  - PPT14.html
  - PPT15.html
  - PPT16.html
  - PPT17.html
  - PPT18.html
  - PPT19.20.html (PPT15.16.html)
  - PPT21.22.23.html
  - PPT24.html (PPT17.html)
  - PPT25.html (PPT18.html)
  - PPT26.html (PPT19.html)
  - PPT27.html (PPT20.html)
  - PPT28.html (PPT21.html)
  - PPT29.30.31.32.html
  - PPT33.html (PPT22.html)
  - PPT34.html (PPT23.html)
  - PPT35.html (PPT24.html)
  - PPT36.html (PPT25.html)
  - PPT37.html
  - PPT38.39.html (PPT26.27.html)
  - PPT40.41.html
  - PPT42.html
  - PPT42.43.44.html
  - PPT45.html (PPT30.html)
  - PPT46.html (PPT31.html)
  - PPT47.html (PPT32.html)
  - PPT48.49.html
  - PPT50.html
  - PPT51.html
  - PPT52.html
  - PPT53.html
  - PPT54.html
  - PPT55.html
  - PPT56.html

- CSS

  - default.css
  - main.css

- JS

  - jquery-1.10.2.min.js
  - layout.js

- cdn
  - Noto Sans KR - 폰트

---

```
<!--📌 DEV Check(1) : 메뉴 페이지 시 class="nav__text--active" 클래스추가 -->

<!--📌 DEV Check(2) : select invalid시 required 추가 -->

<!--📌 DEV Check(3) : select 비활성화  disabled 추가-->

<!--📌 DEV Check(4) : 메시지 설정 광고성 여부 check가 아닐때(정보성일때) class="denied--active" 클래스 삭제 -->

<!--📌 DEV Check(5) : 발송시점 input[type="radio"]가 예약일 경우 disabled 삭제 -->

<!--📌 DEV Check(6) : subject(제목) 두줄이면 detail(내용)에 class="detail__maxlength" 추가  -->

<!--📌 DEV Check(7) : arrow 비활성화 class="table-pagination__arrow--disable" 추가 -->

<!--📌 DEV Check(8) : pagination active 됐을 때, li class="table-pagination--active" 추가 -->

<!--📌 DEV Check(9) : table 내역이 없을 경우 input에 disabled 추가 -->

<!--📌 DEV Check(10) : table 내역이 없을 경우 div class="table-pagination--disable" 추가 -->

<!--📌 DEV Check(11) : 취소버튼 필요없다면 삭제 -->

<!--📌 DEV Check(12) :
        modal 두번째면 - class="moadal-depth2 추가
        modal 세번째면 - class="moadal-depth3 추가
        modal 네번째면 - class="moadal-depth4 추가 -->

<!--📌 DEV Check(13) : 등록된 톡유형에 따라 class="preview-message--active" 추가  -->

<!--📌 DEV Check(14) : 템플릿 불러오기 전화면 class="content--active" 클래스 삭제 -->

<!--📌 DEV Check(15) : 사용안함일때 class="talk-setting__template disabled" 클래스 추가 -->

<!--📌 DEV Check(16) : 사용안함일때 class="talk-setting__option disabled" 클래스 추가 -->

<!--📌 DEV Check(17) : 알림톡 유형에 따라 class="preview-message--active" 추가  -->

<!--📌 DEV Check(18) : 메시지 유형에 따라 class="preview-message--active" 추가  -->

<!--📌 DEV Check(19) : select, input 선택 class="active" 추가 -->

<!--📌 DEV Check(20) : 버튼설정 목록과 같은 페이지일 경우  <section class="setting-wrap">~</section> 삭제-->

<!--📌 DEV Check(21) : 이미지 목록형 게시판에 목록 없으면 gallery-no-list 클래스 추가-->

<!--📌 DEV Check(22) : 정보성 유지 class="tab__switch--disabled" 추가-->

<!--📌 DEV Check(23) : 광고성 유지 class="tab__switch--checked" 추가-->

```

## Code Review

```
/**/ css 수정요청
<!----> html 수정요청
<!--📍 code review 0524 (1) 해당 컴포넌트 검토 요청 #2-->
<!--📍 code review 0524 (2) 고객설정 수정 #3-->
<!--📍 code review 0524 (3) 친구톡 버튼 설정 항목 없을경우 #4-->
<!--📍 code review 0524 (4) 대체 발송, 발신번호, 수신거부 번호 최상단 이동 #5-->

<!--📍 code review 0524 (1-1) 해당 컴포넌트 검토 요청 #2-->

```
