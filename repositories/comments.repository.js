const Comment = require('../models/comment');
const { Op } = require('sequelize');

class CommentRepo {
  createComment = async (userId, cardId, content) => {
    const createCardResult = await Comment.create({
      userId,
      cardId,
      content,
    });
    return createCardResult;
  };

  getAllComments = async (cardId) => {
    const getCommentsResult = await Comment.findAll({
      where: { cardId },
      attributes: ['commentId', 'content', 'createdAt'],
    });
    return getCommentsResult;
  };

  deleteComment = async (userId, commentId) => {
    const deleteCommentResult = await Comment.destroy({
      where: { commentId, userId },
    });
    return deleteCommentResult;
  };
}

module.exports = CommentRepo;
