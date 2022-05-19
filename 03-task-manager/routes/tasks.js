const router = require('express').Router();
const {
  getAll,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks');

router.route('/').get(getAll).post(createTasks);
router
  .route('/:id')
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
