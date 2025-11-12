// import React, { use } from 'react';
// import { Bounce, toast, ToastContainer } from 'react-toastify';
// import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

// const UpdateJobs = () => {
// //    const { user, setUser, updateUser } = use(AuthContext);
//     // const [name, setName] = useState(user?.displayName || "");
//     // const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
//     // console.log(user)

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         updateUser({displayName: name, photo})
//         .then(() => {
//             setUser({...user, displayName: name, photoURL});
//             toast.success('Update Successful!', {
//                 position: "top-center",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             });

//         })
//     .catch((error) => {
//         console.log(error);
//     })
//     }

// return (
//     <div className=' mx-auto py-10'>
//         <div className="card shadow-sm  bg-white flex flex-col w-full lg:w-1/4 mx-auto h-auto">
//             <figure className='p-3'>
//                 <img className='h-[300px] w-full rounded-md object-cover'
//                     src={user?.photoURL || "https://th.bing.com/th/id/R.2fa57439a24f242faaf2333fe5e9e295?rik=ERIOJB6KU7TNYw&pid=ImgRaw&r=0"}
//                     alt="User Image" />
//             </figure>

//             <div className="card-body flex-1">
//                 <form onSubmit={handleUpdate} className="space-y-3">
//                     <label className="label">Job Title</label>
//                     <input name='title' type="text" className="input input-bordered w-full" placeholder="Enter Job Title" required />

//                     <label className="label">Category</label>
//                     <select name='category' defaultValue="Pick a color" className="select appearance-none w-full">
//                         <option disabled={true}>Select Job Category</option>
//                         <option>Web Development</option>
//                         <option>Mobile App Development</option>
//                         <option>Graphic Design</option>
//                         <option>Digital Marketing</option>
//                         <option>Content Writing</option>
//                     </select>

//                     <label className="label">Cover Image</label>
//                     <input name='photo' type="text" className="input input-bordered w-full" placeholder="Enter Job Image URL" required />

//                     <div className='w-full mx-auto'>
//                         <label className="label mb-2">Summary</label>
//                         <textarea name="summary" rows="5" className='w-full border-2 pl-3 border-base-300 rounded-xl resize-none' required></textarea>
//                     </div>
//                     <div>
//                         <label className="font-semibold">Name:</label>
//                         <input type="text" className="input input-border w-full mt-2" value={name} onChange={(e) => setName(e.target.value)} />
//                     </div>
//                     <div>
//                         <label className="font-semibold">PhotoURL:</label>
//                         <input type="text" className="input input-border w-full mt-2" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
//                     </div>
//                     <button type="submit" className="btn btn-neutral w-full mt-3">Save Changes</button>
//                 </form>

//             </div>
//         </div>
//         <ToastContainer
//             position="bottom-center"
//             autoClose={2000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//             transition={Bounce}
//         />
//     </div>
// );
// };

// export default UpdateJobs;