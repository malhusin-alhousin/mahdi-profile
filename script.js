/* تغيير لغة الموقع */
function changeLanguage(lang){

    if(lang === "ar"){

        document.documentElement.lang = "ar";
        document.body.dir = "rtl";

        document.getElementById("navHome").innerText = "الرئيسية";
        document.getElementById("navAbout").innerText = "نبذة عني";
        document.getElementById("navSkills").innerText = "المهارات";
        document.getElementById("navGallery").innerText = "المعرض";
        document.getElementById("navContact").innerText = "التواصل";

        document.getElementById("smallName").innerText = "مهدي الحسين";
        document.getElementById("name").innerText = "مهدي الحسين";
        document.getElementById("job").innerText = "عارض أزياء";
        document.getElementById("tagline").innerText = "بدلات كلاسيكية • أزياء شبابية • حضور أنيق";

        document.getElementById("btnInstagram").innerText = "إنستغرام";
        document.getElementById("btnFacebook").innerText = "فيسبوك";
        document.getElementById("btnTikTok").innerText = "تيك توك";
        document.getElementById("btnWhatsApp").innerText = "واتساب";
        document.getElementById("btnTelegram").innerText = "تلغرام";
        document.getElementById("btnEmail").innerText = "إيميل";
        document.getElementById("btnCall").innerText = "اتصال";
        document.getElementById("downloadCV").innerHTML = '<i class="fa-solid fa-download"></i> تحميل السيرة';

        document.getElementById("aboutTitle").innerText = "نبذة عني";
        document.getElementById("aboutText").innerText =
        "عارض أزياء متخصص في البدلات الرسمية والأزياء الشبابية، أقدم محتوى يعكس الأناقة والثقة والحضور بأسلوب احترافي وعصري.";

        document.getElementById("skillsTitle").innerText = "مهارات العرض";
        document.getElementById("skill1Title").innerText = "البدلات الكلاسيكية";
        document.getElementById("skill1Text").innerText = "إطلالات رسمية أنيقة للمناسبات والتصوير والإعلانات.";
        document.getElementById("skill2Title").innerText = "الستايل الشبابي";
        document.getElementById("skill2Text").innerText = "أزياء عصرية شبابية بأسلوب واثق ومنظم.";
        document.getElementById("skill3Title").innerText = "جلسات التصوير";
        document.getElementById("skill3Text").innerText = "وضعيات احترافية مناسبة للتصوير ومحتوى السوشيال ميديا.";

        document.getElementById("stat1").innerText = "إطلالات أزياء";
        document.getElementById("stat2").innerText = "تعاونات";
        document.getElementById("stat3").innerText = "منصات تواصل";

        document.getElementById("galleryTitle").innerText = "معرض الصور";
        document.getElementById("contactTitle").innerText = "تواصل معي";
        document.getElementById("contactText").innerText =
        "متاح للتعاون مع محلات الملابس، جلسات التصوير، الإعلانات، وعروض الأزياء.";

        document.getElementById("footerText").innerText =
        "© 2026 مهدي الحسين. جميع الحقوق محفوظة.";
    }

    else{

        document.documentElement.lang = "en";
        document.body.dir = "ltr";

        document.getElementById("navHome").innerText = "Home";
        document.getElementById("navAbout").innerText = "About";
        document.getElementById("navSkills").innerText = "Skills";
        document.getElementById("navGallery").innerText = "Gallery";
        document.getElementById("navContact").innerText = "Contact";

        document.getElementById("smallName").innerText = "Mahdi Al-Hussein";
        document.getElementById("name").innerText = "Mahdi Al-Hussein";
        document.getElementById("job").innerText = "Fashion Model";
        document.getElementById("tagline").innerText = "Classic Suits • Casual Style • Elegant Presence";

        document.getElementById("btnInstagram").innerText = "Instagram";
        document.getElementById("btnFacebook").innerText = "Facebook";
        document.getElementById("btnTikTok").innerText = "TikTok";
        document.getElementById("btnWhatsApp").innerText = "WhatsApp";
        document.getElementById("btnTelegram").innerText = "Telegram";
        document.getElementById("btnEmail").innerText = "Email";
        document.getElementById("btnCall").innerText = "Call Me";
        document.getElementById("downloadCV").innerHTML = '<i class="fa-solid fa-download"></i> Download CV';

        document.getElementById("aboutTitle").innerText = "About Me";
        document.getElementById("aboutText").innerText =
        "Professional Fashion Model specializing in classic suits and modern casual wear. Passionate about elegance, confidence, luxury style, and professional brand presentation.";

        document.getElementById("skillsTitle").innerText = "Modeling Skills";
        document.getElementById("skill1Title").innerText = "Classic Suits";
        document.getElementById("skill1Text").innerText = "Elegant formal looks for events, brands, and professional campaigns.";
        document.getElementById("skill2Title").innerText = "Casual Style";
        document.getElementById("skill2Text").innerText = "Modern youth fashion with confidence and clean presentation.";
        document.getElementById("skill3Title").innerText = "Photoshoots";
        document.getElementById("skill3Text").innerText = "Professional poses for fashion photography and social media content.";

        document.getElementById("stat1").innerText = "Fashion Looks";
        document.getElementById("stat2").innerText = "Collaborations";
        document.getElementById("stat3").innerText = "Social Platforms";

        document.getElementById("galleryTitle").innerText = "Gallery";
        document.getElementById("contactTitle").innerText = "Contact Me";
        document.getElementById("contactText").innerText =
        "Open for collaborations, fashion shoots, brand promotions, and modeling opportunities.";

        document.getElementById("footerText").innerText =
        "© 2026 Mahdi Al-Hussein. All Rights Reserved.";
    }
}

/* تشغيل تأثير الظهور عند النزول */
function revealElements(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let visiblePoint = 100;

        if(elementTop < windowHeight - visiblePoint){
            reveals[i].classList.add("active");
        }
    }
}

/* إظهار زر الرجوع للأعلى */
function showScrollButton(){

    let scrollBtn = document.getElementById("scrollTopBtn");

    if(window.scrollY > 400){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }
}

/* عند الضغط على زر الرجوع للأعلى */
document.getElementById("scrollTopBtn").onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

/* تشغيل الأكواد عند النزول */
window.addEventListener("scroll", function(){
    revealElements();
    showScrollButton();
});

/* تشغيل تأثير الظهور أول ما تفتح الصفحة */
window.addEventListener("load", function(){
    revealElements();
});