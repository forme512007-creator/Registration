import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile Number is required"),

    gender: Yup.string().required("Please select gender"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Registration Successful!");

    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-4xl font-extrabold text-center text-white mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Join us by filling in your details below
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Full Name
              </label>

              <Field
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              />

              <ErrorMessage
                name="fullName"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Email Address
              </label>

              <Field
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Mobile Number
              </label>

              <Field
                type="text"
                name="mobile"
                placeholder="9876543210"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              />

              <ErrorMessage
                name="mobile"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Gender
              </label>

              <Field
                as="select"
                name="gender"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              >
                <option className="text-black" value="">
                  Select Gender
                </option>

                <option className="text-black" value="Male">
                  Male
                </option>

                <option className="text-black" value="Female">
                  Female
                </option>

                <option className="text-black" value="Other">
                  Other
                </option>
              </Field>

              <ErrorMessage
                name="gender"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Password
              </label>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Confirm Password
              </label>

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none"
              />

              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="mt-1 text-sm text-red-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 active:scale-95"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;