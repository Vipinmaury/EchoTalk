// import { useState } from "react";
// import { LanguagesIcon } from "lucide-react";
// import { Link } from "react-router";

// import useSignUp from "../hooks/useSignUp";

// const SignUpPage = () => {
//   const [signupData, setSignupData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   // This is how we did it at first, without using our custom hook
//   // const queryClient = useQueryClient();
//   // const {
//   //   mutate: signupMutation,
//   //   isPending,
//   //   error,
//   // } = useMutation({
//   //   mutationFn: signup,
//   //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
//   // });

//   // This is how we did it using our custom hook - optimized version
//   const { isPending, error, signupMutation } = useSignUp();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     signupMutation(signupData);
//   };

//   return (
//     <div
//       className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
//       data-theme="forest"
//     >
//       <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
//         {/* SIGNUP FORM - LEFT SIDE */}
//         <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
//           {/* LOGO */}
//           <div className="mb-4 flex items-center justify-start gap-2">
//             <LanguagesIcon className="size-9 text-primary" />
//             <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
//               EchoTalk
//             </span>
//           </div>

//           {/* ERROR MESSAGE IF ANY */}
//           {error && (
//             <div className="alert alert-error mb-4">
//               <span>{error.response.data.message}</span>
//             </div>
//           )}

//           <div className="w-full">
//             <form onSubmit={handleSignup}>
//               <div className="space-y-4">
//                 <div>
//                   <h2 className="text-xl font-semibold">Create an Account</h2>
//                   <p className="text-sm opacity-70">
//                     Join EchoTalk and start your language learning adventure!
//                   </p>
//                 </div>

//                 <div className="space-y-3">
//                   {/* FULLNAME */}
//                   <div className="form-control w-full">
//                     <label className="label">
//                       <span className="label-text">Full Name</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="John Doe"
//                       className="input input-bordered w-full"
//                       value={signupData.fullName}
//                       onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
//                       required
//                     />
//                   </div>
//                   {/* EMAIL */}
//                   <div className="form-control w-full">
//                     <label className="label">
//                       <span className="label-text">Email</span>
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="john@gmail.com"
//                       className="input input-bordered w-full"
//                       value={signupData.email}
//                       onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
//                       required
//                     />
//                   </div>
//                   {/* PASSWORD */}
//                   <div className="form-control w-full">
//                     <label className="label">
//                       <span className="label-text">Password</span>
//                     </label>
//                     <input
//                       type="password"
//                       placeholder="********"
//                       className="input input-bordered w-full"
//                       value={signupData.password}
//                       onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
//                       required
//                     />
//                     <p className="text-xs opacity-70 mt-1">
//                       Password must be at least 6 characters long
//                     </p>
//                   </div>

//                   <div className="form-control">
//                     <label className="label cursor-pointer justify-start gap-2">
//                       <input type="checkbox" className="checkbox checkbox-sm" required />
//                       <span className="text-xs leading-tight">
//                         I agree to the{" "}
//                         <span className="text-primary hover:underline">terms of service</span> and{" "}
//                         <span className="text-primary hover:underline">privacy policy</span>
//                       </span>
//                     </label>
//                   </div>
//                 </div>

//                 <button className="btn btn-primary w-full" type="submit">
//                   {isPending ? (
//                     <>
//                       <span className="loading loading-spinner loading-xs"></span>
//                       Loading...
//                     </>
//                   ) : (
//                     "Create Account"
//                   )}
//                 </button>

//                 <div className="text-center mt-4">
//                   <p className="text-sm">
//                     Already have an account?{" "}
//                     <Link to="/login" className="text-primary hover:underline">
//                       Sign in
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* SIGNUP FORM - RIGHT SIDE */}
//         <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
//           <div className="max-w-md p-8">
//             {/* Illustration */}
//             <div className="relative aspect-square max-w-sm mx-auto">
//               <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
//             </div>

//             <div className="text-center space-y-3 mt-6">
//               <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
//               <p className="opacity-70">
//                 Practice conversations, make friends, and improve your language skills together
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;







import { useState } from "react";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* FORM SECTION */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <LanguagesIcon className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              EchoTalk
            </h1>
          </div>

          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Join the Community!</h2>
            <p className="text-gray-600 mb-6">Sign up to start your language learning journey</p>

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                {error.response.data.message}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  value={signupData.fullName}
                  onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500">Password must be at least 6 characters long</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  required
                />
                <label className="text-xs text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    privacy policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                disabled={isPending}
              >
                {isPending && <span className="loading loading-spinner loading-xs"></span>}
                {isPending ? "Creating Account..." : "Sign Up"}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:underline font-medium">
                  Log in here
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* VISUAL SECTION */}
        <div className="hidden md:flex md:w-2/5 bg-indigo-600 text-white p-8 flex-col justify-center items-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Learn, Connect, Grow</h2>
            <p className="text-indigo-100">
              Sign up to practice languages, meet new friends, and explore cultures worldwide.
            </p>
            <div className="mt-6">
              <svg className="w-32 h-32 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;