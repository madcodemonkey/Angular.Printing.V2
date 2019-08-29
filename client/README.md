# AngPrint

Based on this article
https://medium.com/@Idan_Co/angular-print-service-290651c721f9

Greater control over page
https://www.w3.org/TR/1998/REC-CSS2-19980512/page.html

Getting rid of URL at bottom of page
Basically it needs to be in styles.css
@media print {
  @page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
  }
}

then the footer is too high......
https://medium.com/@zerox/keep-that-damn-footer-at-the-bottom-c7a921cb9551


