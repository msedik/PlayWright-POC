# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myfirstTestCase.spec.ts >> my First TestCase
- Location: tests\myfirstTestCase.spec.ts:2:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Mutasil"
Received: "البوابة الرقمية"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × locator resolved to <html lang="ar" dir="rtl">…</html>
       - unexpected value "البوابة الرقمية"

```

```yaml
- link "تخطي إلى المحتوى الرئيسي":
  - /url: "#main-content"
- banner:
  - link "SiteName":
    - /url: /
    - img "SiteName"
  - list:
    - listitem:
      - link "متصل":
        - /url: /
    - listitem:
      - link "English":
        - /url: javascript:languageHelper.changeLanguage()
    - listitem:
      - button "البحث"
  - link "الصفحة الرئيسية":
    - /url: /
    - img "SiteName"
- main:
  - heading "أهلا بكم في متصل" [level=2]
  - paragraph: وصول سريع إلى الخدمات الرقمية المخصصة للأفراد، مع تجربة موحدة لإدارة جميع طلباتك وخدماتك.
  - link "استكشف خدمات الأفراد":
    - /url: https://mutasilind.cst.gov.sa/Services/Index
  - heading "أهلا بكم في متصل" [level=2]
  - paragraph: منصة موحدة تمكّن مقدمي الخدمات من إدارة طلباتهم والاستفادة من خدمات الهيئة بكفاءة وموثوقية.
  - link "استكشف خدمات مقدمي الخدمة":
    - /url: https://mutasilprov.cst.gov.sa/Services/Index
  - button "قطاع الأعمال"
  - button "الأفراد"
  - button "مقدمي الخدمة"
  - button "GovernmentEntities"
  - heading "استعرض خدماتنا" [level=2]
  - link "عرض الكل":
    - /url: https://mutasilind.cst.gov.sa/Services/Index
  - paragraph: يمكنك الوصول إلى جميع خدمات الهيئة وإتمام إجراءاتك إلكترونياً بكل سهولة وأمان.
  - navigation "تصنيف الخدمات":
    - tablist:
      - tab "الأفراد" [selected]
      - tab "قطاع الأعمال"
      - tab "مقدمي الخدمة"
  - tabpanel "الأفراد":
    - heading "التسجيل لاختبار رخصة هواة اللاسلكي" [level=4]
    - paragraph: يعد تجاوز اختبار هواة اللاسلكي متطلبا للحصول على رخصة هواة اللاسلكي
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/558
    - heading "الاعتراض على مخالفة" [level=4]
    - paragraph: تتيح الخدمة للمستخدم من الاعتراض على المخالفات التي تستوفي الشروط
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/561
    - heading "التنظيميات و القرارات و مرئيات العموم" [level=4]
    - paragraph: تتيح صفحة التنظيمات للمستفيد الاطلاع على القرارات والوثائق التنظيمية، الاطلاع على مرئيات العموم والمشاركة فيها وفق المهلة الزمنية المحددة
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/535
    - heading "الاستعلام عن أرقامي" [level=4]
    - paragraph: تتيح الخدمة للمستخدم الاستعلام والاطلاع على تفاصيل أرقام الهاتف وشرائح البيانات المسجلة برقم الهوية
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/4
    - heading "تصعيد شكاوى الاتصالات" [level=4]
    - paragraph: تتيح الخدمة للمستفيد تصعيد الشكوى لدى الهيئة في حال إغلاق الشكوى من قبل مقدم الخدمة دون معالجة أو في حال مرور 5 أيام ولم يتم حلها
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/2
    - heading "بلاغ عدم فتح تذكرة شكوى في أنظمة مقدم الخدمة" [level=4]
    - paragraph: هي خدمة تتيح للمستخدمين من اشعار الهيئة بعدم تجاوب مقدم الخدمة في فتح تذكرة شكوى عبر أحد قنواته.
    - link "بدء الخدمة":
      - /url: https://mutasilind.cst.gov.sa/Services/Details/422
  - heading "إنجازاتنا بالأرقام" [level=2]
  - paragraph: أرقام تعكس حجم الخدمات المقدمة وثقة المستفيدين. .
  - text: 700+ ألف طلب تم معالجته 2.4+ ألف رخصة مصدرة 2.5+ مليون مستخدم مسجل 120+ خدمة إلكترونية
  - heading "هل تحتاج إلى مساعدة؟" [level=6]
  - paragraph: نسعد بتواصلكم وتلقي طلباتكم من خلال وسائل عدة تضمن سرعة وصول شكواكم ومقترحاتكم والاستجابة معها بكل موثوقية وشفافية
  - link "اضغط هنا":
    - /url: /SupportAndAssistance
- contentinfo:
  - heading "ملخص" [level=2]
  - list:
    - listitem:
      - link "هل تحتاج إلى مساعدة؟":
        - /url: /SupportAndAssistance
    - listitem:
      - link "الاستفسارات والطلبات":
        - /url: https://mutasilind.cst.gov.sa/supportcenter/Index
    - listitem:
      - link "سياسة الخصوصية":
        - /url: /Home/Privacy
    - listitem:
      - link "شروط الاستخدام":
        - /url: /Home/TermsOfUse
  - heading "روابط مهمة" [level=2]
  - list:
    - listitem:
      - link "بوابة خدمات قطاع الأعمال":
        - /url: https://mutasilbus.cst.gov.sa/Services/IndexServices
    - listitem:
      - link "بوابة خدمات الأفراد":
        - /url: https://mutasilind.cst.gov.sa/Services/IndexServices
    - listitem:
      - link "بوابة خدمات الجهات الحكومية":
        - /url: https://mutasilgov.cst.gov.sa/Services/IndexServices
    - listitem:
      - link "بوابة خدمات مقدمي الخدمة":
        - /url: https://mutasilprov.cst.gov.sa/Services/IndexServices
  - heading "الاتصال والدعم" [level=2]
  - list:
    - listitem:
      - link "الاسئلة الشائعة":
        - /url: /FAQ
    - listitem:
      - link "خدمة اسألني":
        - /url: /SupportAndAssistance
    - listitem:
      - link "شارك معنا":
        - /url: /SupportAndAssistance
    - listitem:
      - link "بلاغ دعم تقني":
        - /url: /SupportAndAssistance
  - img "منصة متصل"
  - img "الذكاء الاصطناعي"
  - paragraph: جميع الحقوق محفوظة © 2026
  - paragraph: تم تطويره وصيانته بواسطة هيئة الاتصالات والفضاء والتقنية
  - paragraph: "تاريخ آخر تعديل: 04/12/2026"
- img "مساعدة في استخدام الموقع"
```

# Test source

```ts
  1 | import   {test, expect}  from '@playwright/test';
  2 | test ('my First TestCase', async({page})=>
  3 | {
  4 |    await page.goto('https://mutasil.cst.gov.sa/');
> 5 |    await expect (page).toHaveTitle('Mutasil');
    |                        ^ Error: expect(page).toHaveTitle(expected) failed
  6 | });
```