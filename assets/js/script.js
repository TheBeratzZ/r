if('serviceWorker' in navigator) 
{
  let registration;

  const registerServiceWorker = async () => {
    registration = await navigator.serviceWorker.register('../../service-worker.js');
  };

  registerServiceWorker();
}
else{
  alert('tarayıcınız çevrimdışı web siteleri için uyumlu değil.')
}