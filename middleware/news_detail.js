export default function ({route}) {
    if (isNaN(route.params.id)) {
      redirect('/error')
    }
  }