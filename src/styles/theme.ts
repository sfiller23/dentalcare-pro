import { Theme } from "../types/themeTypes";

export const theme: Theme = {
  colors: {
    primary: "#306CFE", // כחול עיקרי (כפתור "Create Appointment")
    secondary: "#F5F7FA", // רקע בהיר כללי
    accent: "#D0E0FD", // רקע עדין לתוויות/כפתורים (selected)
    textPrimary: "#1C1E21", // טקסט עיקרי
    textSecondary: "#5F6C72", // טקסט משני
    background: "#FFFFFF", // רקע כרטיסים ותוכן
    border: "#E5EAF2", // גבולות בין כרטיסים או שורות
    success: "#22C55E", // ירוק להצלחה (✓ Done)
    warning: "#FACC15", // צהוב לאזהרה (Pending)
    danger: "#EF4444", // אדום לשגיאות (לא מופיע כאן, אבל כדאי שיהיה)
    sidebarBg: "#F9FAFB", // רקע הסיידבר
    icon: "#A0AEC0",
  },
  spacing: (factor: number) => `${factor * 1.2}rem`,
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  fontSizes: {
    info: "0.875rem",
    label: "1rem",
    subtitle: "1.25rem",
    title: "1.5rem",
  },
  fontWeights: {
    info: 100,
    label: 400,
    subtitle: 400,
    title: 700,
  },
  buttonSizes: {
    sm: "3rem",
    md: "5rem",
    lg: "7rem",
  },
};
