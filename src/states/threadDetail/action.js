import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  CLEAR_VOTE_THREAD_DETAIL: 'CLEAR_VOTE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  CLEAR_VOTE_COMMENT: 'CLEAR_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function clearVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}
function toggleDownVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}
function toggleClearVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.CLEAR_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getDetailThreads(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThreads(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThreads(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralizeVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment(id, content) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment(id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.upvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.downvoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearVoteComment(commendId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleClearVoteCommentActionCreator(authUser, commendId));
    try {
      await api.neutralizevoteComment(threadDetail.id, commendId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  clearVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleClearVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToogleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncClearVoteComment,
  asyncClearVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
};