import { Formik, Form, Field, ErrorMessage} from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  const initialValues: FormValues = {
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
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    alert("Registration Successful!");
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F0C] via-[#111827] to-[#0F172A] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-emerald-500/20 bg-black/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] p-8 md:p-10">
        <h2 className="mb-2 bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          Create Account
        </h2>

        <p className="mb-8 text-center text-slate-400">
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
              <label className="mb-2 block font-medium text-emerald-100">
                Full Name
              </label>

              <Field
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />

              <ErrorMessage
                name="fullName"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-emerald-100">
                Email Address
              </label>

              <Field
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block font-medium text-emerald-100">
                Mobile Number
              </label>

              <Field
                type="text"
                name="mobile"
                placeholder="9876543210"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />

              <ErrorMessage
                name="mobile"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block font-medium text-emerald-100">
                Gender
              </label>

              <Field
                as="select"
                name="gender"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              >
                <option value="" className="text-black">
                  Select Gender
                </option>

                <option value="Male" className="text-black">
                  Male
                </option>

                <option value="Female" className="text-black">
                  Female
                </option>

                <option value="Other" className="text-black">
                  Other
                </option>
              </Field>

              <ErrorMessage
                name="gender"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium text-emerald-100">
                Password
              </label>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block font-medium text-emerald-100">
                Confirm Password
              </label>

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />

              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="mt-1 text-sm text-rose-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95"
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