import userService from "../services/userService.js";

class UserController {
    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.json({ status: "success", payload: users });
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.uid);
            res.json({ status: "success", payload: user });
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            const created = await userService.createUser(req.body);
            res.status(201).json({ status: "success", payload: created });
        } catch (error) {
            next(error);
        }
    }

    async updateUserById(req, res, next) {
        try {
            const updated = await userService.updateUser(req.params.uid, req.body);
            res.json({ status: "success", payload: updated });
        } catch (error) {
            next(error);
        }
    }

    async deleteUserById(req, res, next) {
        try {
            const deleted = await userService.deleteUser(req.params.uid);
            res.json({ status: "success", payload: deleted });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();