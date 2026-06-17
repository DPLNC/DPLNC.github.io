# DPLNC GitHub Pages build

Included:
- SEO meta tags, canonical URL, Open Graph image
- robots.txt and sitemap.xml for Google / Naver registration
- CNAME for GitHub Pages custom domain: www.dplnc.com
- Privacy policy and Terms pages
- Footer with business, office and service information area

Important:
- Replace `대표자: 입력 필요` and `사업자등록번호: 입력 필요` in `index.html` before publishing.
- If you sell or take online payments, add 통신판매업신고번호 and detailed terms.

Update:
- Fixed Index panel overflow issue where the hidden menu text could appear while scrolling on wide/short browser ratios.


FTC link note:
- The old bare `https://www.ftc.go.kr/bizCommPop.do` link was replaced because it returns an error without a business registration number parameter.
- For a direct popup link, use `https://www.ftc.go.kr/bizCommPop.do?wrkr_no=YOUR_BUSINESS_NUMBER_WITHOUT_HYPHENS`.
- If DPLNC is not a mail-order/online sales business, the FTC mail-order seller lookup link may be unnecessary.

- Legal pages use relative navigation links, so local preview will not jump to file:///C:/.


SEO update:
- Added Korean brand name `디피엘앤씨` to title, description, Open Graph, schema alternateName, About text, and footer for Korean search matching.
