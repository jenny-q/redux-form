import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
    name:'cars',
    initialState: {
        searchTerm:'',
        data: []
    },
    reducers: {
        changeSearchTerm(state,action) {
            state.searchTerm = action.payload
        },
        addCar(state,action) {
            state.data.push({
                //cannot access form slice, must be sent in the payload {}
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state,action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated;
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;