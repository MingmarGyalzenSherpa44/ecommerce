import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from '../../interfaces/ICartProduct';




interface CartState {
    items: ICartProduct[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<ICartProduct>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                console.log("es")
                existingItem.quantity++;
                existingItem.totalPrice += action.payload.price;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
            }
            state.totalQuantity++;
            state.totalAmount += action.payload.price;
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalAmount -= existingItem.price;
                state.totalQuantity--;

                if (existingItem.quantity === 0) {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
            }
        },
    },
});

export const { addItem, removeItem, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;