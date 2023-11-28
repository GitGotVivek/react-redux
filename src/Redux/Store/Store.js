import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../Slice/Authslice";
import { cmsSlice } from "../Slice/CmsSlice";
import { Comment } from "../Slice/CommentSlice";


export const store = configureStore({
    reducer:{
        AuthUser:AuthSlice.reducer,
        CmsSlice:cmsSlice.reducer,
        Comment:Comment.reducer
    }
});