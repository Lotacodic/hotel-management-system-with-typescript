import roomModel from "../../models/roomModel"

class RoomService{

    // Add Room
    async addRoom(data: ICreateRoom){
        return await roomModel.create(data)
    }

    // Update a book 
    async updateRoom(id: string, updateData, partial<ICreateRoom>){
        return await roomModel.findByIdAndUpdate(id, updateData, {
            new: true
        })
    }

    // Delete a Room 
    async deleteRoom(id: string){
        return await roomModel.findByIdAndDelete(id)
    }

    // Get a single room
    async getRoom(filter:partial<ICreateRoom> ){
        return await roomModel.findOne(filter)
    }

    // Get all rooms 
    async getRooms (filter:  partial<ICreateRoom>){
        return await roomModel.find(filter)
    }
}

export default RoomService