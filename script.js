function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const content = document.querySelector('main');
  const menuIcon = document.querySelector('.menu-icon');
  
  // تبديل ظهور القائمة
  menuOverlay.classList.toggle('active');
  
  // إضافة أو إزالة تأثير التغبيش
  content.classList.toggle('blurred');
  
  // تبديل حالة الأيقونة
  menuIcon.classList.toggle('active');
}
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentsList = document.getElementById('commentsList');

  if (commentInput.value.trim() !== '') {
    // إنشاء عنصر جديد للتعليق
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;

    // إضافة التعليق إلى القائمة
    commentsList.appendChild(newComment);

    // مسح النص من النموذج
    commentInput.value = '';
  } else {
    alert('الرجاء كتابة تعليق قبل الإرسال!');
  }
}