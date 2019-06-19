export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {

    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    let authorLastName = "";
    let authorFirstName = "";

    //this check is purely because first user  created
    // doesn't have profile details
    if (profile.isEmpty) {
      authorFirstName = "Ebe";
      authorLastName = "Dev"
    }
    else {
      authorFirstName = profile.firstName
      authorLastName = profile.lastName
    }

    firestore.collection('projects').add({
      ...project,
      authorFirstName: authorFirstName,
      authorLastName: authorLastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const deleteProject = (projectID) => {
  return (dispatch, { getFirestore }) => {

    // make async call to database
    const firestore = getFirestore();

    firestore.collection('projects').doc(projectID).delete()
    dispatch({ type: 'DELETE_PROJECT' });
  }
};