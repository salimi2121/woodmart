import img1 from '../../../../assets/home-page/off-pet/off1.png';

export default function OffPetHeader() {
  return (
    <div className="off-pet-right position-relative d-flex flex-column gap-2 justify-content-start align-items-center p-2 mt-3 rounded-5">
      <h2 className="text-white text-center aligne-justify">آف پــــت وودمارت</h2>
      <a href="" className="text-success bg-white rounded-3 px-3 py-2 fs-6">اینجا کلیک کنید</a>
      <div className="off-img1 position-absolute">
        <img src={img1} alt="" className='w-100 h-100' />
      </div>
    </div>
  );
}