import React from 'react';

const News1 = () => {
  // Fungsi goBack ditambahkan ke dalam useEffect untuk memastikan pengaturan efek setelah rendering komponen
  React.useEffect(() => {
    const goBack = () => {
      window.history.back();
    };

    // Memasang event listener ke tombol "Back"
    const backButton = document.querySelector('.back-button');
    if (backButton) {
      backButton.addEventListener('click', goBack);
    }

    // Membersihkan event listener saat komponen dibongkar (unmount)
    return () => {
      if (backButton) {
        backButton.removeEventListener('click', goBack);
      }
    };
  }, []);

  return (
    <>
      <section className="news">
        <div className="container">
          {/* Back Button Start */}
          <div className="back-button btn btn-primary">
            <i className="fas fa-arrow-left me-2"></i> Back
          </div>
          {/* Back Button End */}
          <div className="content-top text-center">
            <img src="../img/news/GYIIFIYMIA29.jpg" alt="" />
            <h1>Held for the Second Time at IPB, 14 Countries Compete in the GYIIF and IYMIA Events</h1>
          </div>
          <div className="content-bottom">
                    <p>BOGOR – Opening 2024 with two competitions that could be considered new, IYSA and the Faculty of Food Science and Technology IPB successfully held GYIIF and IYMIA for the second time. Once again held in Bogor, GYIIF and IYMIA succeeded in inviting 61 teams to attend directly to the venue.</p>
                    <p>Even though at this event there were no participants from abroad taking part in the offline competition, what was great about this competition could be said that we had participants from Sabang to Merauke because we had participants from Jambi and Sorong, not just one team but several teams came directly to Bogor!</p>
                    <p>This time GYIIF and IYMIA were attended by 341 teams which were divided into 272 teams participating in the GYIIF event and 69 teams participating in the IYMIA event. All participants came from 14 countries including the United Arab Emirates, Uzbekistan, Thailand, Iran, the Philippines, Malaysia, Turkey, Mexico, Kazakhstan, Romania, India, South Africa, Singapore and of course Indonesia.</p>
                    <p>Held for 4 days from 11-14 January, the following is a series of GYIIF and IYMIA 2024 events. On the first day (11/1), we held an opening ceremony at 1 pm and continued with judging for the teams taking part in the online competition. On the following day (12/1), it was the turn of the teams taking part in the offline competition to carry out judging directly with the judges. On the third day (13/1), the event was filled with a seminar with Dr.-Ing. Dase Hunaefi, STP, MFoodST, who provided material on "INVITRO MEAT AND MEAT ANALOG" and continued with the announcement of the winning teams that took part in the online competition in the evening. Meanwhile, on the last day (14/1) we announced the winners for the teams taking part in the offline competition.</p>
                    <p>Not only gold, silver and bronze medals, we have also prepared many other prizes for the winners including Best Booth, Best Presentation, Best Poster, Best Project, IYSA Semi Grand Award, IYSA Grand Prize and also several special awards. This time there was something special because IPB also gave the Department of Food Science and Technology IPB Special Award.</p>
                    <p>Congratulations to the team from Mentari Intercultural School who succeeded in taking home the main prize in the form of Fully Funded to take part in the 2024 WSEEC event at Pancasila University Jakarta (terms and conditions apply).</p>
                    <p>We also want to congratulate all the winners at both the GYIIF and IYMIA events!</p>
                    <p>Let's continue to work, achieve and develop with IYSA. If they can do it, why can't you? Come achieve your achievements with us.</p>
                    <a>Source: </a><a target='_blank' href="https://www.depokpos.com/2024/01/digelar-kedua-kalinya-di-ipb-14-negara-bersaing-di-ajang-gyiif-dan-iymia/">Click here</a>
                </div>
        </div>
      </section>
    </>
  );
};

export default News1;
