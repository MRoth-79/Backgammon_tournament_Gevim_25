/** @type {import('tailwindcss').Config} */
module.exports = {
  // המקום שבו Tailwind יחפש מחלקות (classes) כדי לכלול אותן ב-CSS הסופי
  content: [
    "./*.html", // מחפש בכל קבצי ה-HTML בשורש הפרויקט
    "./src/**/*.{html,js,ts,jsx,tsx}", // אם תשתמש בתיקיית src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
