// import { useState } from "react";
// import { LanguagesIcon } from "lucide-react";
// import { Link } from "react-router";
// import useLogin from "../hooks/useLogin";

// const LoginPage = () => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   // This is how we did it at first, without using our custom hook
//   // const queryClient = useQueryClient();
//   // const {
//   //   mutate: loginMutation,
//   //   isPending,
//   //   error,
//   // } = useMutation({
//   //   mutationFn: login,
//   //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
//   // });

//   // This is how we did it using our custom hook - optimized version
//   const { isPending, error, loginMutation } = useLogin();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     loginMutation(loginData);
//   };

//   return (
//     <div
//       className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
//       data-theme="forest"
//     >
//       <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
//         {/* LOGIN FORM SECTION */}
//         <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
//           {/* LOGO */}
//           <div className="mb-4 flex items-center justify-start gap-2">
//             <LanguagesIcon className="size-9 text-primary" />
//             <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
//               EchoTalk
//             </span>
//           </div>

//           {/* ERROR MESSAGE DISPLAY */}
//           {error && (
//             <div className="alert alert-error mb-4">
//               <span>{error.response.data.message}</span>
//             </div>
//           )}

//           <div className="w-full">
//             <form onSubmit={handleLogin}>
//               <div className="space-y-4">
//                 <div>
//                   <h2 className="text-xl font-semibold">Welcome Back 👋 </h2>
//                   <p className="text-sm opacity-70">
//                     Sign in to your account to continue your language journey
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <div className="form-control w-full space-y-2">
//                     <label className="label">
//                       <span className="label-text">Email</span>
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="input input-bordered w-full"
//                       value={loginData.email}
//                       onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                       required
//                     />
//                   </div>

//                   <div className="form-control w-full space-y-2">
//                     <label className="label">
//                       <span className="label-text">Password</span>
//                     </label>
//                     <input
//                       type="password"
//                       placeholder="Enter your password"
//                       className="input input-bordered w-full"
//                       value={loginData.password}
//                       onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                       required
//                     />
//                   </div>

//                   <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
//                     {isPending ? (
//                       <>
//                         <span className="loading loading-spinner loading-xs"></span>
//                         Signing in...
//                       </>
//                     ) : (
//                       "Sign In"
//                     )}
//                   </button>

//                   <div className="text-center mt-4">
//                     <p className="text-sm">
//                       Don't have an account?{" "}
//                       <Link to="/signup" className="text-primary hover:underline">
//                         Create one
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* IMAGE SECTION */}
//         <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
//           <div className="max-w-md p-8">
//             {/* Illustration */}
//             <div className="relative aspect-square max-w-sm mx-auto">
//               <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
//             </div>

//             <div className="text-center space-y-3 mt-6">
//               <h2 className="text-xl font-semibold">Log in to start exchanging languages worldwide.</h2>
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
// export default LoginPage;


import { useState } from "react";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600 mb-6">Log in to continue your global language adventure</p>

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                {error.response.data.message}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                disabled={isPending}
              >
                {isPending && <span className="loading loading-spinner loading-xs"></span>}
                {isPending ? "Logging in..." : "Log In"}
              </button>

              <p className="text-center text-sm text-gray-600">
                New to EchoTalk?{" "}
                <Link to="/signup" className="text-indigo-600 hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* VISUAL SECTION */}
        <div className="hidden md:flex md:w-2/5 bg-indigo-600 text-white p-8 flex-col justify-center items-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Connect Through Language</h2>
            <p className="text-indigo-100">
              Join a global community to practice languages, share cultures, and build friendships.
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

export default LoginPage;
