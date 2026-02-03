import petService from "../services/petService.js";

class PetController {
    async getAllPets(req, res, next) {
        try {
            const pets = await petService.getAllPets();
            res.json({ status: "success", payload: pets });
        } catch (error) {
            next(error);
        }
    }

    async getPetById(req, res, next) {
        try {
            const pet = await petService.getPetById(req.params.pid);
            res.json({ status: "success", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    async createPet(req, res, next) {
        try {
            const created = await petService.createPet(req.body);
            res.status(201).json({ status: "success", payload: created });
        } catch (error) {
            next(error);
        }
    }

    async updatePetById(req, res, next) {
        try {
            const updated = await petService.updatePet(req.params.pid, req.body);
            res.json({ status: "success", payload: updated });
        } catch (error) {
            next(error);
        }
    }

    async deletePetById(req, res, next) {
        try {
            const deleted = await petService.deletePet(req.params.pid);
            res.json({ status: "success", payload: deleted });
        } catch (error) {
            next(error);
        }
    }
}

export default new PetController();