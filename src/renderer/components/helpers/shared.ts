import { dispatch } from '../../store/store'
import { setPage } from '../../store/page/actionCreators'
import { Page } from '../../store/page/types'

export function navigateTo (page: Page): void {
  dispatch(setPage(page))
}
