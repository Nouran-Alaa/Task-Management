export const getTimeDifference = (targetDate) => {
  const currentDate = new Date();
  const target = new Date(targetDate);

  const differenceInMilliseconds = target - currentDate;
  const daysDifference = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (differenceInMilliseconds > 0) {
    // Future dates
    if (daysDifference < 7) {
      return `in ${daysDifference} day${daysDifference > 1 ? "s" : ""}`;
    } else if (daysDifference < 30) {
      return `in ${weeksDifference} week${weeksDifference > 1 ? "s" : ""}`;
    } else if (daysDifference < 365) {
      return `in ${monthsDifference} month${monthsDifference > 1 ? "s" : ""}`;
    } else {
      return `in ${yearsDifference} year${yearsDifference > 1 ? "s" : ""}`;
    }
  } else {
    // Past dates
    if (-daysDifference < 7) {
      return `${-daysDifference} day${-daysDifference > 1 ? "s" : ""} ago`;
    } else if (-daysDifference < 30) {
      return `${-weeksDifference} week${-weeksDifference > 1 ? "s" : ""} ago`;
    } else if (-daysDifference < 365) {
      return `${-monthsDifference} month${-monthsDifference > 1 ? "s" : ""} ago`;
    } else {
      return `${-yearsDifference} year${-yearsDifference > 1 ? "s" : ""} ago`;
    }
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const monthOptions = { month: "short" };
  const dayOptions = { day: "numeric" };

  const month = date.toLocaleDateString("en-US", monthOptions);
  const day = date.toLocaleDateString("en-US", dayOptions);

  return `${month}, ${day}`;
};

export const getDueDateStyle = (dueDate) => {
  const currentDate = new Date();
  const targetDate = new Date(dueDate);

  return targetDate < currentDate ? "text-red-500 " : " text-gray-00";
};

export const priorityTextMap = {
  low: "text-blue-500",
  medium: "text-orange-500",
  high: "text-red-500",
};

export const priorityBorderMap = {
  low: "border-blue-500",
  medium: "border-orange-500",
  high: "border-red-500",
};

export const phaseBorderMap = {
  green: "border-t-green-600",
  orange: "border-t-orange-600",
  purple: "border-t-purple-600",
  yellow: "border-t-yellow-600",
  red: "border-t-red-600",
  gray: "border-t-gray-300",
};
export const colorText = {
  green: "text-green-700",
  orange: "text-orange-700",
  purple: "text-purple-700",
  red: "text-red-700",
  yellow: "text-yellow-700",
  gray: "text-gray-300",
};
export const colorOutline = {
  green: "outline-green-400",
  orange: "outline-orange-400",
  purple: "outline-purple-400",
  red: "outline-red-400",
  yellow: "outline-yellow-400",
  gray: "outline-gray-400",
};
