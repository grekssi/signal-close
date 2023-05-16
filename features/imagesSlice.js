// src/redux/imagesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    imagesByMonth: {},
  },
  reducers: {
    setImages: (state, action) => {
      state.imagesByMonth = action.payload;
    },
  },
});

const getNonEmptyDates = (filteredImagesByMonth) => {
  return Object.keys(filteredImagesByMonth).filter(
    (date) => filteredImagesByMonth[date].length > 0
  );
};

export const { setImages } = imagesSlice.actions;
export const selectImages = (state) => state.images.imagesByMonth;

export const selectImagesByEmail = (state, email) => {
  const imagesByMonth = state.images.imagesByMonth;
  const filteredImagesByMonth = {};

  Object.keys(imagesByMonth).forEach((month) => {
    const filteredImages = imagesByMonth[month].filter(
      (image) => image.email === email
    );

    if (filteredImages.length > 0) {
      filteredImagesByMonth[month] = filteredImages;
    }
  });

  return filteredImagesByMonth;
};

export const selectUserEmails = (state, parentUsers) => {
  console.log(parentUsers);
  const imagesByMonth = state.images.imagesByMonth;
  const userEmails = [];

  Object.values(imagesByMonth).forEach((images) => {
    images.forEach((image) => {
      if (!userEmails.includes(image.email)) {
        userEmails.push(image.email);
      }
    });
  });

  // Only return emails that are also in parentUsers
  const accessibleUserEmails = userEmails.filter((email) =>
    parentUsers.includes(email)
  );

  return accessibleUserEmails;
};

export default imagesSlice.reducer;
