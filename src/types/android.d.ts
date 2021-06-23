/// <reference path="android-declarations.d.ts"/>

declare module androidx {
	export module appcompat {
		export module app {
			export abstract class ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBar>;
				public static NAVIGATION_MODE_STANDARD: number;
				public static NAVIGATION_MODE_LIST: number;
				public static NAVIGATION_MODE_TABS: number;
				public static DISPLAY_USE_LOGO: number;
				public static DISPLAY_SHOW_HOME: number;
				public static DISPLAY_HOME_AS_UP: number;
				public static DISPLAY_SHOW_TITLE: number;
				public static DISPLAY_SHOW_CUSTOM: number;
				public getHeight(): number;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public onMenuKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public constructor();
				public show(): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public isShowing(): boolean;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setHideOffset(param0: number): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setSubtitle(param0: string): void;
				public openOptionsMenu(): boolean;
				public setLogo(param0: number): void;
				public getElevation(): number;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public startActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public getSelectedNavigationIndex(): number;
				public closeOptionsMenu(): boolean;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getTabCount(): number;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public collapseActionView(): boolean;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module ActionBar {
				export class DisplayOptions {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.DisplayOptions>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$DisplayOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.LayoutParams>;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class NavigationMode {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.NavigationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$NavigationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class OnMenuVisibilityListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnMenuVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnMenuVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onMenuVisibilityChanged(param0: boolean): void;
				}
				export class OnNavigationListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnNavigationListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnNavigationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNavigationItemSelected(param0: number, param1: number): boolean;
					});
					public constructor();
					public onNavigationItemSelected(param0: number, param1: number): boolean;
				}
				export abstract class Tab {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.Tab>;
					public static INVALID_POSITION: number;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public select(): void;
					public getContentDescription(): string;
					public setCustomView(param0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public constructor();
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
				export class TabListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.TabListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$TabListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					});
					public constructor();
					public onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggle {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle>;
				public setDrawerIndicatorEnabled(param0: boolean): void;
				public isDrawerSlideAnimationEnabled(): boolean;
				public setDrawerArrowDrawable(param0: androidx.appcompat.graphics.drawable.DrawerArrowDrawable): void;
				public constructor(param0: globalAndroid.app.Activity, param1: androidx.drawerlayout.widget.DrawerLayout, param2: androidx.appcompat.widget.Toolbar, param3: number, param4: number);
				public isDrawerIndicatorEnabled(): boolean;
				public getToolbarNavigationClickListener(): globalAndroid.view.View.OnClickListener;
				public syncState(): void;
				public onDrawerStateChanged(param0: number): void;
				public onDrawerOpened(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.app.Activity, param1: androidx.drawerlayout.widget.DrawerLayout, param2: number, param3: number);
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onDrawerSlide(param0: globalAndroid.view.View, param1: number): void;
				public setToolbarNavigationClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public getDrawerArrowDrawable(): androidx.appcompat.graphics.drawable.DrawerArrowDrawable;
				public onDrawerClosed(param0: globalAndroid.view.View): void;
				public setDrawerSlideAnimationEnabled(param0: boolean): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setHomeAsUpIndicator(param0: number): void;
			}
			export module ActionBarDrawerToggle {
				export class Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.Delegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
						setActionBarDescription(param0: number): void;
						getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
						getActionBarThemedContext(): globalAndroid.content.Context;
						isNavigationVisible(): boolean;
					});
					public constructor();
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public setActionBarDescription(param0: number): void;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
				export class DelegateProvider {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$DelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
					});
					public constructor();
					public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				}
				export class FrameworkActionBarDelegate extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.FrameworkActionBarDelegate>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
					public setActionBarDescription(param0: number): void;
				}
				export class ToolbarCompatDelegate extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.ToolbarCompatDelegate>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public setActionBarDescription(param0: number): void;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggleHoneycomb {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb>;
				public static setActionBarDescription(param0: androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: globalAndroid.app.Activity, param2: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static setActionBarUpIndicator(param0: globalAndroid.app.Activity, param1: globalAndroid.graphics.drawable.Drawable, param2: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static getThemeUpIndicator(param0: globalAndroid.app.Activity): globalAndroid.graphics.drawable.Drawable;
			}
			export module ActionBarDrawerToggleHoneycomb {
				export class SetIndicatorInfo {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo>;
					public setHomeAsUpIndicator: java.lang.reflect.Method;
					public setHomeActionContentDescription: java.lang.reflect.Method;
					public upIndicatorView: globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertController {
				public static class: java.lang.Class<androidx.appcompat.app.AlertController>;
				public setView(param0: number): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getListView(): globalAndroid.widget.ListView;
				public setView(param0: globalAndroid.view.View): void;
				public setIcon(param0: number): void;
				public getButton(param0: number): globalAndroid.widget.Button;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getIconAttributeResId(param0: number): number;
				public setTitle(param0: string): void;
				public setButtonPanelLayoutHint(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setButton(param0: number, param1: string, param2: globalAndroid.content.DialogInterface.OnClickListener, param3: globalAndroid.os.Message, param4: globalAndroid.graphics.drawable.Drawable): void;
				public installContent(): void;
				public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.app.AppCompatDialog, param2: globalAndroid.view.Window);
				public setCustomTitle(param0: globalAndroid.view.View): void;
				public setMessage(param0: string): void;
			}
			export module AlertController {
				export class AlertParams {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams>;
					public mContext: globalAndroid.content.Context;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mIconId: number;
					public mIcon: globalAndroid.graphics.drawable.Drawable;
					public mIconAttrId: number;
					public mTitle: string;
					public mCustomTitleView: globalAndroid.view.View;
					public mMessage: string;
					public mPositiveButtonText: string;
					public mPositiveButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mPositiveButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNegativeButtonText: string;
					public mNegativeButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNegativeButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNeutralButtonText: string;
					public mNeutralButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNeutralButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mCancelable: boolean;
					public mOnCancelListener: globalAndroid.content.DialogInterface.OnCancelListener;
					public mOnDismissListener: globalAndroid.content.DialogInterface.OnDismissListener;
					public mOnKeyListener: globalAndroid.content.DialogInterface.OnKeyListener;
					public mItems: native.Array<string>;
					public mAdapter: globalAndroid.widget.ListAdapter;
					public mOnClickListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mViewLayoutResId: number;
					public mView: globalAndroid.view.View;
					public mViewSpacingLeft: number;
					public mViewSpacingTop: number;
					public mViewSpacingRight: number;
					public mViewSpacingBottom: number;
					public mViewSpacingSpecified: boolean;
					public mCheckedItems: native.Array<boolean>;
					public mIsMultiChoice: boolean;
					public mIsSingleChoice: boolean;
					public mCheckedItem: number;
					public mOnCheckboxClickListener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener;
					public mCursor: globalAndroid.database.Cursor;
					public mLabelColumn: string;
					public mIsCheckedColumn: string;
					public mForceInverseBackground: boolean;
					public mOnItemSelectedListener: globalAndroid.widget.AdapterView.OnItemSelectedListener;
					public mOnPrepareListViewListener: androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener;
					public mRecycleOnMeasure: boolean;
					public constructor(param0: globalAndroid.content.Context);
					public apply(param0: androidx.appcompat.app.AlertController): void;
				}
				export module AlertParams {
					export class OnPrepareListViewListener {
						public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener>;
						/**
						 * Constructs a new instance of the androidx.appcompat.app.AlertController$AlertParams$OnPrepareListViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPrepareListView(param0: globalAndroid.widget.ListView): void;
						});
						public constructor();
						public onPrepareListView(param0: globalAndroid.widget.ListView): void;
					}
				}
				export class ButtonHandler {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.ButtonHandler>;
					public constructor(param0: globalAndroid.content.DialogInterface);
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export class CheckedItemAdapter extends globalAndroid.widget.ArrayAdapter<string> {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.CheckedItemAdapter>;
					public hasStableIds(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: native.Array<string>);
					public getItemId(param0: number): number;
				}
				export class RecycleListView {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.RecycleListView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setHasDecor(param0: boolean, param1: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.appcompat.app.AlertDialog>;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getListView(): globalAndroid.widget.ListView;
				public setView(param0: globalAndroid.view.View): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public getButton(param0: number): globalAndroid.widget.Button;
				public setIcon(param0: number): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.os.Message): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitle(param0: string): void;
				public setIconAttribute(param0: number): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setTitle(param0: number): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.content.DialogInterface.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public setCustomTitle(param0: globalAndroid.view.View): void;
				public setMessage(param0: string): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.content.DialogInterface.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module AlertDialog {
				export class Builder {
					public static class: java.lang.Class<androidx.appcompat.app.AlertDialog.Builder>;
					public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: number, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public setNegativeButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCursor(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: string): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(param0: native.Array<string>, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(param0: globalAndroid.database.Cursor, param1: string, param2: string, param3: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: globalAndroid.widget.ListAdapter, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setCustomTitle(param0: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(param0: string): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setCancelable(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setIconAttribute(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setAdapter(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public getContext(): globalAndroid.content.Context;
					public setSingleChoiceItems(param0: native.Array<string>, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: globalAndroid.database.Cursor, param1: number, param2: string, param3: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(param0: native.Array<string>, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnKeyListener(param0: globalAndroid.content.DialogInterface.OnKeyListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(param0: string): androidx.appcompat.app.AlertDialog.Builder;
					public show(): androidx.appcompat.app.AlertDialog;
					public create(): androidx.appcompat.app.AlertDialog;
					public constructor(param0: globalAndroid.content.Context);
					public setIcon(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setRecycleOnMeasureEnabled(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setInverseBackgroundForced(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatActivity implements androidx.appcompat.app.AppCompatCallback, androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatActivity>;
				public onSupportNavigateUp(): boolean;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public findViewById(param0: number): globalAndroid.view.View;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor();
				public openOptionsMenu(): void;
				public attachBaseContext(param0: globalAndroid.content.Context): void;
				public onNightModeChanged(param0: number): void;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public supportNavigateUpTo(param0: globalAndroid.content.Intent): void;
				public supportInvalidateOptionsMenu(): void;
				public onContentChanged(): void;
				public onPostResume(): void;
				public onStart(): void;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onTitleChanged(param0: string, param1: number): void;
				public onPrepareSupportNavigateUpTaskStack(param0: androidx.core.app.TaskStackBuilder): void;
				public supportRequestWindowFeature(param0: number): boolean;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public setSupportProgressBarIndeterminate(param0: boolean): void;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public setTheme(param0: number): void;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public supportShouldUpRecreateTask(param0: globalAndroid.content.Intent): boolean;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public onSupportContentChanged(): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setSupportProgressBarIndeterminateVisibility(param0: boolean): void;
				public closeOptionsMenu(): void;
				public onCreateSupportNavigateUpTaskStack(param0: androidx.core.app.TaskStackBuilder): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setSupportProgressBarVisibility(param0: boolean): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public getResources(): globalAndroid.content.res.Resources;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setContentView(param0: number): void;
				public setSupportProgress(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public setContentView(param0: globalAndroid.view.View): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: number);
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatCallback>;
				/**
				 * Constructs a new instance of the androidx.appcompat.app.AppCompatCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
					onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
					onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				});
				public constructor();
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export abstract class AppCompatDelegate {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate>;
				public static MODE_NIGHT_FOLLOW_SYSTEM: number;
				public static MODE_NIGHT_AUTO_TIME: number;
				public static MODE_NIGHT_AUTO: number;
				public static MODE_NIGHT_NO: number;
				public static MODE_NIGHT_YES: number;
				public static MODE_NIGHT_AUTO_BATTERY: number;
				public static MODE_NIGHT_UNSPECIFIED: number;
				public static FEATURE_SUPPORT_ACTION_BAR: number;
				public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public static create(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public requestWindowFeature(param0: number): boolean;
				public setTheme(param0: number): void;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public static isCompatVectorFromResourcesEnabled(): boolean;
				public static getDefaultNightMode(): number;
				public findViewById(param0: number): globalAndroid.view.View;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public isHandleNativeActionModesEnabled(): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public static create(param0: globalAndroid.app.Activity, param1: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public static create(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity, param2: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public attachBaseContext(param0: globalAndroid.content.Context): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setLocalNightMode(param0: number): void;
				public getLocalNightMode(): number;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public setContentView(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public createView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public setContentView(param0: globalAndroid.view.View): void;
				public installViewFactory(): void;
				public static create(param0: globalAndroid.app.Dialog, param1: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onPostResume(): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public static setDefaultNightMode(param0: number): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
			export module AppCompatDelegate {
				export class NightMode {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.NightMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.AppCompatDelegate$NightMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDelegateImpl extends androidx.appcompat.app.AppCompatDelegate implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl>;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public requestWindowFeature(param0: number): boolean;
				public setTheme(param0: number): void;
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public findViewById(param0: number): globalAndroid.view.View;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public isHandleNativeActionModesEnabled(): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public attachBaseContext(param0: globalAndroid.content.Context): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setLocalNightMode(param0: number): void;
				public getLocalNightMode(): number;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public getPanelState(param0: number, param1: boolean): androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState;
				public setContentView(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public createView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public setContentView(param0: globalAndroid.view.View): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public installViewFactory(): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onPostResume(): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
			export module AppCompatDelegateImpl {
				export class ActionBarDrawableToggleImpl extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionBarDrawableToggleImpl>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
					public setActionBarDescription(param0: number): void;
				}
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class ActionModeCallbackWrapperV9 extends androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionModeCallbackWrapperV9>;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, param1: androidx.appcompat.view.ActionMode.Callback);
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class AppCompatWindowCallback extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AppCompatWindowCallback>;
					public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
					public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
					public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
					public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
					public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
					public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
					public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public onContentChanged(): void;
				}
				export class AutoBatteryNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoBatteryNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export abstract class AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager>;
				}
				export class AutoTimeNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoTimeNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export class ListMenuDecorView extends androidx.appcompat.widget.ContentFrameLayout {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ListMenuDecorView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public setBackgroundResource(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, param1: globalAndroid.content.Context);
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				}
				export class PanelFeatureState {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState>;
					public qwertyMode: boolean;
					public hasPanelItems(): boolean;
					public clearMenuPresenters(): void;
				}
				export module PanelFeatureState {
					export class SavedState {
						public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
				export class PanelMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialog implements androidx.appcompat.app.AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialog>;
				public invalidateOptionsMenu(): void;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setContentView(param0: number): void;
				public findViewById(param0: number): globalAndroid.view.View;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public setContentView(param0: globalAndroid.view.View): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTitle(param0: number): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public supportRequestWindowFeature(param0: number): boolean;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onStop(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialogFragment {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialogFragment>;
				public setupDialog(param0: globalAndroid.app.Dialog, param1: number): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatViewInflater {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater>;
				public createImageView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageView;
				public createEditText(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatEditText;
				public createCheckedTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckedTextView;
				public createImageButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageButton;
				public createAutoCompleteTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
				public constructor();
				public createToggleButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatToggleButton;
				public createRadioButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
				public createCheckBox(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
				public createSpinner(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSpinner;
				public createTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
				public createButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
				public createSeekBar(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSeekBar;
				public createView(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public createRatingBar(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRatingBar;
				public createMultiAutoCompleteTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView;
			}
			export module AppCompatViewInflater {
				export class DeclaredOnClickListener {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater.DeclaredOnClickListener>;
					public onClick(param0: globalAndroid.view.View): void;
					public constructor(param0: globalAndroid.view.View, param1: string);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class NavItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.app.NavItemSelectedListener>;
				public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
				public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public constructor(param0: androidx.appcompat.app.ActionBar.OnNavigationListener);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ResourcesFlusher {
				public static class: java.lang.Class<androidx.appcompat.app.ResourcesFlusher>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ToolbarActionBar extends androidx.appcompat.app.ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar>;
				public getHeight(): number;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public onMenuKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public show(): void;
				public getWrappedWindowCallback(): globalAndroid.view.Window.Callback;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public isShowing(): boolean;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setSubtitle(param0: string): void;
				public openOptionsMenu(): boolean;
				public setLogo(param0: number): void;
				public getElevation(): number;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getNavigationMode(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public getSelectedNavigationIndex(): number;
				public closeOptionsMenu(): boolean;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTabCount(): number;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public requestFocus(): boolean;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public collapseActionView(): boolean;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module ToolbarActionBar {
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class MenuBuilderCallback extends androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.MenuBuilderCallback>;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class ToolbarCallbackWrapper extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ToolbarCallbackWrapper>;
					public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
					public onCreatePanelView(param0: number): globalAndroid.view.View;
					public constructor(param0: globalAndroid.view.Window.Callback);
					public constructor(param0: androidx.appcompat.app.ToolbarActionBar, param1: globalAndroid.view.Window.Callback);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightCalculator {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightCalculator>;
				public static DAY: number;
				public static NIGHT: number;
				public sunset: number;
				public sunrise: number;
				public state: number;
				public calculateTwilight(param0: number, param1: number, param2: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightManager {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightManager>;
			}
			export module TwilightManager {
				export class TwilightState {
					public static class: java.lang.Class<androidx.appcompat.app.TwilightManager.TwilightState>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class WindowDecorActionBar extends androidx.appcompat.app.ActionBar implements androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback {
				public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar>;
				public getHeight(): number;
				public onContentScrollStopped(): void;
				public hasLogo(): boolean;
				public showForSystem(): void;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public constructor();
				public show(): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public enableContentAnimations(param0: boolean): void;
				public isShowing(): boolean;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setHideOffset(param0: number): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public animateToMode(param0: boolean): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public onWindowVisibilityChanged(param0: number): void;
				public setSubtitle(param0: string): void;
				public doShow(param0: boolean): void;
				public getElevation(): number;
				public setLogo(param0: number): void;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public removeAllTabs(): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public onContentScrollStarted(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: boolean);
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public startActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public doHide(param0: boolean): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public constructor(param0: globalAndroid.app.Dialog);
				public getSelectedNavigationIndex(): number;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTabCount(): number;
				public constructor(param0: globalAndroid.view.View);
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public requestFocus(): boolean;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public collapseActionView(): boolean;
				public hideForSystem(): void;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module WindowDecorActionBar {
				export class ActionModeImpl extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.ActionModeImpl>;
					public getTitle(): string;
					public getMenuInflater(): globalAndroid.view.MenuInflater;
					public getCustomView(): globalAndroid.view.View;
					public getMenu(): globalAndroid.view.Menu;
					public dispatchOnCreate(): boolean;
					public setTitle(param0: string): void;
					public finish(): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setSubtitle(param0: number): void;
					public setTitle(param0: number): void;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor();
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public constructor(param0: androidx.appcompat.app.WindowDecorActionBar, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.ActionMode.Callback);
					public getSubtitle(): string;
					public onCloseSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setCustomView(param0: globalAndroid.view.View): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setTitleOptionalHint(param0: boolean): void;
					public invalidate(): void;
				}
				export class TabImpl extends androidx.appcompat.app.ActionBar.Tab {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.TabImpl>;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public select(): void;
					public setPosition(param0: number): void;
					public getContentDescription(): string;
					public setCustomView(param0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getCallback(): androidx.appcompat.app.ActionBar.TabListener;
					public constructor();
					public constructor(param0: androidx.appcompat.app.WindowDecorActionBar);
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawerArrowDrawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable>;
					public static ARROW_DIRECTION_LEFT: number;
					public static ARROW_DIRECTION_RIGHT: number;
					public static ARROW_DIRECTION_START: number;
					public static ARROW_DIRECTION_END: number;
					public getArrowShaftLength(): number;
					public getDirection(): number;
					public setBarThickness(param0: number): void;
					public getGapSize(): number;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public getIntrinsicWidth(): number;
					public setVerticalMirror(param0: boolean): void;
					public setSpinEnabled(param0: boolean): void;
					public setGapSize(param0: number): void;
					public setArrowHeadLength(param0: number): void;
					public getBarThickness(): number;
					public setDirection(param0: number): void;
					public getOpacity(): number;
					public setArrowShaftLength(param0: number): void;
					public setColor(param0: number): void;
					public getColor(): number;
					public getBarLength(): number;
					public getIntrinsicHeight(): number;
					public getArrowHeadLength(): number;
					public setAlpha(param0: number): void;
					public setProgress(param0: number): void;
					public getPaint(): globalAndroid.graphics.Paint;
					public constructor(param0: globalAndroid.content.Context);
					public getProgress(): number;
					public isSpinEnabled(): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setBarLength(param0: number): void;
				}
				export module DrawerArrowDrawable {
					export class ArrowDirection {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable.ArrowDirection>;
						/**
						 * Constructs a new instance of the androidx.appcompat.graphics.drawable.DrawerArrowDrawable$ArrowDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module text {
			export class AllCapsTransformationMethod {
				public static class: java.lang.Class<androidx.appcompat.text.AllCapsTransformationMethod>;
				public getTransformation(param0: string, param1: globalAndroid.view.View): string;
				public constructor(param0: globalAndroid.content.Context);
				public onFocusChanged(param0: globalAndroid.view.View, param1: string, param2: boolean, param3: number, param4: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ActionBarPolicy {
				public static class: java.lang.Class<androidx.appcompat.view.ActionBarPolicy>;
				public showsOverflowMenuButton(): boolean;
				public enableHomeButtonByDefault(): boolean;
				public getStackedTabMaxWidth(): number;
				public hasEmbeddedTabs(): boolean;
				public getMaxActionButtons(): number;
				public static get(param0: globalAndroid.content.Context): androidx.appcompat.view.ActionBarPolicy;
				public getEmbeddedMenuWidthLimit(): number;
				public getTabContainerHeight(): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export abstract class ActionMode {
				public static class: java.lang.Class<androidx.appcompat.view.ActionMode>;
				public isUiFocusable(): boolean;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public setTag(param0: any): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
			export module ActionMode {
				export class Callback {
					public static class: java.lang.Class<androidx.appcompat.view.ActionMode.Callback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.ActionMode$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
						onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					});
					public constructor();
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.view.CollapsibleActionView>;
				/**
				 * Constructs a new instance of the androidx.appcompat.view.CollapsibleActionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActionViewExpanded(): void;
					onActionViewCollapsed(): void;
				});
				public constructor();
				public onActionViewExpanded(): void;
				public onActionViewCollapsed(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ContextThemeWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.ContextThemeWrapper>;
				public applyOverrideConfiguration(param0: globalAndroid.content.res.Configuration): void;
				public onApplyThemeResource(param0: globalAndroid.content.res.Resources.Theme, param1: number, param2: boolean): void;
				public setTheme(param0: number): void;
				public getThemeResId(): number;
				public getSystemService(param0: string): any;
				public getResources(): globalAndroid.content.res.Resources;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public attachBaseContext(param0: globalAndroid.content.Context): void;
				public getTheme(): globalAndroid.content.res.Resources.Theme;
				public getAssets(): globalAndroid.content.res.AssetManager;
				public constructor();
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class StandaloneActionMode extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.StandaloneActionMode>;
				public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public isUiFocusable(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.ActionBarContextView, param2: androidx.appcompat.view.ActionMode.Callback, param3: boolean);
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public onCloseSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportActionModeWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper>;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.ActionMode);
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public setTag(param0: any): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
			export module SupportActionModeWrapper {
				export class CallbackWrapper extends androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper.CallbackWrapper>;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ActionMode.Callback);
					public getActionModeWrapper(param0: androidx.appcompat.view.ActionMode): globalAndroid.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportMenuInflater {
				public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater>;
				public constructor(param0: globalAndroid.content.Context);
				public inflate(param0: number, param1: globalAndroid.view.Menu): void;
			}
			export module SupportMenuInflater {
				export class InflatedOnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.InflatedOnMenuItemClickListener>;
					public constructor(param0: any, param1: string);
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
				export class MenuState {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.MenuState>;
					public constructor(param0: androidx.appcompat.view.SupportMenuInflater, param1: globalAndroid.view.Menu);
					public resetGroup(): void;
					public hasAddedItem(): boolean;
					public readItem(param0: globalAndroid.util.AttributeSet): void;
					public addSubMenuItem(): globalAndroid.view.SubMenu;
					public readGroup(param0: globalAndroid.util.AttributeSet): void;
					public addItem(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ViewPropertyAnimatorCompatSet {
				public static class: java.lang.Class<androidx.appcompat.view.ViewPropertyAnimatorCompatSet>;
				public setInterpolator(param0: globalAndroid.view.animation.Interpolator): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public play(param0: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setListener(param0: androidx.core.view.ViewPropertyAnimatorListener): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public start(): void;
				public playSequentially(param0: androidx.core.view.ViewPropertyAnimatorCompat, param1: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public cancel(): void;
				public setDuration(param0: number): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class WindowCallbackWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper>;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
				public onPointerCaptureChanged(param0: boolean): void;
				public onSearchRequested(param0: any): boolean;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public onContentChanged(): void;
				public onCreatePanelView(param0: number): globalAndroid.view.View;
				public getWrapped(): globalAndroid.view.Window.Callback;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onDetachedFromWindow(): void;
				public onSearchRequested(): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public constructor(param0: globalAndroid.view.Window.Callback);
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItem>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number, param5: string);
					public getContentDescription(): string;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public getTitleCondensed(): string;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setExclusiveCheckable(param0: boolean): androidx.appcompat.view.menu.ActionMenuItem;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public requiresActionButton(): boolean;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public invoke(): boolean;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public getAlphabeticShortcut(): string;
					public setActionView(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public isChecked(): boolean;
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItemView extends androidx.appcompat.widget.AppCompatTextView implements androidx.appcompat.view.menu.MenuView.ItemView, androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView>;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public setTitle(param0: string): void;
					public showsIcon(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public prefersCondensedTitle(): boolean;
					public hasText(): boolean;
					public setCheckable(param0: boolean): void;
					public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					public setChecked(param0: boolean): void;
					public setEnabled(param0: boolean): void;
					public onMeasure(param0: number, param1: number): void;
					public setShortcut(param0: boolean, param1: string): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setItemInvoker(param0: androidx.appcompat.view.menu.MenuBuilder.ItemInvoker): void;
					public needsDividerAfter(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setPopupCallback(param0: androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setExpandedFormat(param0: boolean): void;
					public needsDividerBefore(): boolean;
				}
				export module ActionMenuItemView {
					export class ActionMenuItemForwardingListener extends androidx.appcompat.widget.ForwardingListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.ActionMenuItemForwardingListener>;
						public constructor(param0: globalAndroid.view.View);
						public onForwardingStarted(): boolean;
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
						public constructor(param0: androidx.appcompat.view.menu.ActionMenuItemView);
					}
					export abstract class PopupCallback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback>;
						public constructor();
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuPresenter>;
					public mSystemContext: globalAndroid.content.Context;
					public mContext: globalAndroid.content.Context;
					public mMenu: androidx.appcompat.view.menu.MenuBuilder;
					public mSystemInflater: globalAndroid.view.LayoutInflater;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mMenuView: androidx.appcompat.view.menu.MenuView;
					public addItemView(param0: globalAndroid.view.View, param1: number): void;
					public setId(param0: number): void;
					public createItemView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView.ItemView;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public shouldIncludeItem(param0: number, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public filterLeftoverView(param0: globalAndroid.view.ViewGroup, param1: number): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getCallback(): androidx.appcompat.view.menu.MenuPresenter.Callback;
					public getItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuWrapper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuWrapper>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class CascadingMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: number, param4: boolean);
					public updateMenuView(param0: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onKey(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
				export module CascadingMenuPopup {
					export class CascadingMenuInfo {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.CascadingMenuInfo>;
						public window: androidx.appcompat.widget.MenuPopupWindow;
						public menu: androidx.appcompat.view.menu.MenuBuilder;
						public position: number;
						public constructor(param0: androidx.appcompat.widget.MenuPopupWindow, param1: androidx.appcompat.view.menu.MenuBuilder, param2: number);
						public getListView(): globalAndroid.widget.ListView;
					}
					export class HorizPosition {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.HorizPosition>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.CascadingMenuPopup$HorizPosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ExpandedMenuView implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ExpandedMenuView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public onItemClick(param0: globalAndroid.widget.AdapterView, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getWindowAnimations(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuItemView implements androidx.appcompat.view.menu.MenuView.ItemView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuItemView>;
					public setEnabled(param0: boolean): void;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public onMeasure(param0: number, param1: number): void;
					public setTitle(param0: string): void;
					public setShortcut(param0: boolean, param1: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setGroupDividerEnabled(param0: boolean): void;
					public showsIcon(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public prefersCondensedTitle(): boolean;
					public setCheckable(param0: boolean): void;
					public adjustListItemSelectionBounds(param0: globalAndroid.graphics.Rect): void;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onFinishInflate(): void;
					public setForceShowIcon(param0: boolean): void;
					public setChecked(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter>;
					public static VIEWS_TAG: string;
					public setId(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public restoreHierarchyState(param0: globalAndroid.os.Bundle): void;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public getAdapter(): globalAndroid.widget.ListAdapter;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public saveHierarchyState(param0: globalAndroid.os.Bundle): void;
					public setItemIndexOffset(param0: number): void;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public constructor(param0: number, param1: number);
					public flagActionItems(): boolean;
				}
				export module ListMenuPresenter {
					export class MenuAdapter {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter.MenuAdapter>;
						public constructor(param0: androidx.appcompat.view.menu.ListMenuPresenter);
						public notifyDataSetChanged(): void;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
						public getItem(param0: number): androidx.appcompat.view.menu.MenuItemImpl;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuAdapter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuAdapter>;
					public getForceShowIcon(): boolean;
					public getCount(): number;
					public constructor(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.LayoutInflater, param2: boolean, param3: number);
					public getItem(param0: number): androidx.appcompat.view.menu.MenuItemImpl;
					public setForceShowIcon(param0: boolean): void;
					public getItemId(param0: number): number;
					public notifyDataSetChanged(): void;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getAdapterMenu(): androidx.appcompat.view.menu.MenuBuilder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuBuilder {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public findItemIndex(param0: number): number;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public add(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public size(): number;
					public setOverrideVisibleItems(param0: boolean): void;
					public startDispatchingItemsChanged(): void;
					public add(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.MenuItem;
					public isShortcutsVisible(): boolean;
					public addMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter): void;
					public getNonActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public close(): void;
					public getContext(): globalAndroid.content.Context;
					public changeMenuMode(): void;
					public add(param0: string): globalAndroid.view.MenuItem;
					public stopDispatchingItemsChanged(): void;
					public setOptionalIconsVisible(param0: boolean): void;
					public getHeaderIcon(): globalAndroid.graphics.drawable.Drawable;
					public setShortcutsVisible(param0: boolean): void;
					public removeMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter): void;
					public setDefaultShowAsAction(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public close(param0: boolean): void;
					public removeItemAt(param0: number): void;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public restorePresenterStates(param0: globalAndroid.os.Bundle): void;
					public isShortcutKey(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public getVisibleItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public clearAll(): void;
					public setHeaderTitleInt(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public hasVisibleItems(): boolean;
					public findGroupIndex(param0: number, param1: number): number;
					public addInternal(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public add(param0: number): globalAndroid.view.MenuItem;
					public getActionViewStatesKey(): string;
					public getHeaderView(): globalAndroid.view.View;
					public setHeaderTitleInt(param0: string): androidx.appcompat.view.menu.MenuBuilder;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public restoreActionViewStates(param0: globalAndroid.os.Bundle): void;
					public setCurrentMenuInfo(param0: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
					public setGroupDividerEnabled(param0: boolean): void;
					public addSubMenu(param0: number): globalAndroid.view.SubMenu;
					public performItemAction(param0: globalAndroid.view.MenuItem, param1: number): boolean;
					public getActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public getExpandedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: globalAndroid.content.ComponentName, param4: native.Array<globalAndroid.content.Intent>, param5: globalAndroid.content.Intent, param6: number, param7: native.Array<globalAndroid.view.MenuItem>): number;
					public isGroupDividerEnabled(): boolean;
					public onItemsChanged(param0: boolean): void;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public performItemAction(param0: globalAndroid.view.MenuItem, param1: androidx.appcompat.view.menu.MenuPresenter, param2: number): boolean;
					public setHeaderViewInt(param0: globalAndroid.view.View): androidx.appcompat.view.menu.MenuBuilder;
					public clear(): void;
					public savePresenterStates(param0: globalAndroid.os.Bundle): void;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public flagActionItems(): void;
					public setHeaderIconInt(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public findItem(param0: number): globalAndroid.view.MenuItem;
					public getHeaderTitle(): string;
					public saveActionViewStates(param0: globalAndroid.os.Bundle): void;
					public addSubMenu(param0: string): globalAndroid.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.SubMenu;
					public setHeaderIconInt(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.view.menu.MenuBuilder;
					public performShortcut(param0: number, param1: globalAndroid.view.KeyEvent, param2: number): boolean;
					public clearHeader(): void;
					public removeGroup(param0: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public addMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter, param1: globalAndroid.content.Context): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					public findGroupIndex(param0: number): number;
					public removeItem(param0: number): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				}
				export module MenuBuilder {
					export class Callback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
							onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						});
						public constructor();
						public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
						public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					}
					export class ItemInvoker {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.ItemInvoker>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$ItemInvoker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						});
						public constructor();
						public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuDialogHelper extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuDialogHelper>;
					public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public show(param0: globalAndroid.os.IBinder): void;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
					public onKey(param0: globalAndroid.content.DialogInterface, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public constructor(param0: androidx.appcompat.view.menu.MenuBuilder);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuHelper>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						dismiss(): void;
					});
					public constructor();
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemImpl {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemImpl>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public getContentDescription(): string;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public getTitleCondensed(): string;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setActionViewExpanded(param0: boolean): void;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public requiresActionButton(): boolean;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public invoke(): boolean;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public requestsActionButton(): boolean;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setExclusiveCheckable(param0: boolean): void;
					public actionFormatChanged(): void;
					public setCallback(param0: java.lang.Runnable): globalAndroid.view.MenuItem;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public getAlphabeticShortcut(): string;
					public setActionView(param0: number): androidx.core.internal.view.SupportMenuItem;
					public hasCollapsibleActionView(): boolean;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public isExclusiveCheckable(): boolean;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public shouldShowIcon(): boolean;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public toString(): string;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public isChecked(): boolean;
					public isActionButton(): boolean;
					public setIsActionButton(param0: boolean): void;
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public getOrdering(): number;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
					public showsTextAsAction(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setTooltipText(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public hasSubMenu(): boolean;
					public getContentDescription(): string;
					public getTitleCondensed(): string;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setExclusiveCheckable(param0: boolean): void;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public setActionView(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public getAlphabeticShortcut(): string;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public isChecked(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.core.internal.view.SupportMenuItem);
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setContentDescription(param0: string): globalAndroid.view.MenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): globalAndroid.view.MenuItem;
				}
				export module MenuItemWrapperICS {
					export class ActionProviderWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper>;
						public onCreateActionView(): globalAndroid.view.View;
						public onPrepareSubMenu(param0: globalAndroid.view.SubMenu): void;
						public onPerformDefaultAction(): boolean;
						public hasSubMenu(): boolean;
					}
					export class ActionProviderWrapperJB extends androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapperJB>;
						public onCreateActionView(): globalAndroid.view.View;
						public overridesItemVisibility(): boolean;
						public setVisibilityListener(param0: androidx.core.view.ActionProvider.VisibilityListener): void;
						public refreshVisibility(): void;
						public isVisible(): boolean;
						public onCreateActionView(param0: globalAndroid.view.MenuItem): globalAndroid.view.View;
						public onActionProviderVisibilityChanged(param0: boolean): void;
					}
					export class CollapsibleActionViewWrapper implements androidx.appcompat.view.CollapsibleActionView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.CollapsibleActionViewWrapper>;
						public onActionViewExpanded(): void;
						public onActionViewCollapsed(): void;
					}
					export class OnActionExpandListenerWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnActionExpandListenerWrapper>;
						public onMenuItemActionExpand(param0: globalAndroid.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: globalAndroid.view.MenuItem): boolean;
					}
					export class OnMenuItemClickListenerWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnMenuItemClickListenerWrapper>;
						public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class MenuPopup implements androidx.appcompat.view.menu.ShowableListMenu, androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public static toMenuAdapter(param0: globalAndroid.widget.ListAdapter): androidx.appcompat.view.menu.MenuAdapter;
					public setEpicenterBounds(param0: globalAndroid.graphics.Rect): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public getEpicenterBounds(): globalAndroid.graphics.Rect;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getId(): number;
					public getListView(): globalAndroid.widget.ListView;
					public updateMenuView(param0: boolean): void;
					public static shouldPreserveIconSpacing(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public setHorizontalOffset(param0: number): void;
					public static measureIndividualMenuWidth(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.content.Context, param3: number): number;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPopupHelper extends androidx.appcompat.view.menu.MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopupHelper>;
					public getGravity(): number;
					public tryShow(): boolean;
					public show(): void;
					public getPopup(): androidx.appcompat.view.menu.MenuPopup;
					public isShowing(): boolean;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public show(param0: number, param1: number): void;
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public tryShow(param0: number, param1: number): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						updateMenuView(param0: boolean): void;
						setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
						flagActionItems(): boolean;
						expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						getId(): number;
						onSaveInstanceState(): globalAndroid.os.Parcelable;
						onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					});
					public constructor();
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
				export module MenuPresenter {
					export class Callback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
							onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						});
						public constructor();
						public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						getWindowAnimations(): number;
					});
					public constructor();
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public getWindowAnimations(): number;
				}
				export module MenuView {
					export class ItemView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView.ItemView>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView$ItemView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
							getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
							setTitle(param0: string): void;
							setEnabled(param0: boolean): void;
							setCheckable(param0: boolean): void;
							setChecked(param0: boolean): void;
							setShortcut(param0: boolean, param1: string): void;
							setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
							prefersCondensedTitle(): boolean;
							showsIcon(): boolean;
						});
						public constructor();
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public showsIcon(): boolean;
						public setCheckable(param0: boolean): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuWrapperICS>;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.core.internal.view.SupportMenu);
					public setGroupVisible(param0: number, param1: boolean): void;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public add(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public size(): number;
					public addSubMenu(param0: number): globalAndroid.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.MenuItem;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: globalAndroid.content.ComponentName, param4: native.Array<globalAndroid.content.Intent>, param5: globalAndroid.content.Intent, param6: number, param7: native.Array<globalAndroid.view.MenuItem>): number;
					public clear(): void;
					public close(): void;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public add(param0: string): globalAndroid.view.MenuItem;
					public findItem(param0: number): globalAndroid.view.MenuItem;
					public addSubMenu(param0: string): globalAndroid.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.SubMenu;
					public performShortcut(param0: number, param1: globalAndroid.view.KeyEvent, param2: number): boolean;
					public removeGroup(param0: number): void;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					public isShortcutKey(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public removeItem(param0: number): void;
					public hasVisibleItems(): boolean;
					public add(param0: number): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ShowableListMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ShowableListMenu>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.ShowableListMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(): void;
						dismiss(): void;
						isShowing(): boolean;
						getListView(): globalAndroid.widget.ListView;
					});
					public constructor();
					public show(): void;
					public isShowing(): boolean;
					public getListView(): globalAndroid.widget.ListView;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class StandardMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.StandardMenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public flagActionItems(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: number, param4: number, param5: boolean);
					public show(): void;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public onKey(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuBuilder extends androidx.appcompat.view.menu.MenuBuilder {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuBuilder>;
					public getActionViewStatesKey(): string;
					public setIcon(param0: number): globalAndroid.view.SubMenu;
					public setQwertyMode(param0: boolean): void;
					public isQwertyMode(): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setShortcutsVisible(param0: boolean): void;
					public setGroupDividerEnabled(param0: boolean): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public getItem(): globalAndroid.view.MenuItem;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: androidx.appcompat.view.menu.MenuItemImpl);
					public getParentMenu(): globalAndroid.view.Menu;
					public isShortcutsVisible(): boolean;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public isGroupDividerEnabled(): boolean;
					public setHeaderIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public setHeaderView(param0: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: string): globalAndroid.view.SubMenu;
					public setHeaderIcon(param0: number): globalAndroid.view.SubMenu;
					public setCallback(param0: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public setHeaderTitle(param0: number): globalAndroid.view.SubMenu;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuWrapperICS extends androidx.appcompat.view.menu.MenuWrapperICS {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuWrapperICS>;
					public getItem(): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.SubMenu;
					public setHeaderIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public setHeaderView(param0: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: string): globalAndroid.view.SubMenu;
					public clearHeader(): void;
					public setHeaderIcon(param0: number): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: number): globalAndroid.view.SubMenu;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView>;
				public mVisAnimListener: androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
				public mPopupContext: globalAndroid.content.Context;
				public mMenuView: androidx.appcompat.widget.ActionMenuView;
				public mActionMenuPresenter: androidx.appcompat.widget.ActionMenuPresenter;
				public mContentHeight: number;
				public mVisibilityAnim: androidx.core.view.ViewPropertyAnimatorCompat;
				public showOverflowMenu(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public animateToVisibility(param0: number): void;
				public isOverflowReserved(): boolean;
				public canShowOverflowMenu(): boolean;
				public positionChild(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: boolean): number;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setVisibility(param0: number): void;
				public isOverflowMenuShowing(): boolean;
				public static next(param0: number, param1: number, param2: boolean): number;
				public postShowOverflowMenu(): void;
				public hideOverflowMenu(): boolean;
				public setContentHeight(param0: number): void;
				public getAnimatedVisibility(): number;
				public isOverflowMenuShowPending(): boolean;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getContentHeight(): number;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public dismissPopupMenus(): void;
				public measureChildView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): number;
			}
			export module AbsActionBarView {
				export class VisibilityAnimListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener>;
					public withFinalVisibility(param0: androidx.core.view.ViewPropertyAnimatorCompat, param1: number): androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
					public onAnimationCancel(param0: globalAndroid.view.View): void;
					public onAnimationStart(param0: globalAndroid.view.View): void;
					public onAnimationEnd(param0: globalAndroid.view.View): void;
					public constructor(param0: androidx.appcompat.widget.AbsActionBarView);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarBackgroundDrawable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarBackgroundDrawable>;
				public constructor(param0: androidx.appcompat.widget.ActionBarContainer);
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public getOpacity(): number;
				public getOutline(param0: any): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContainer {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContainer>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTabContainer(): globalAndroid.view.View;
				public onFinishInflate(): void;
				public setPrimaryBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setVisibility(param0: number): void;
				public setSplitBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public constructor(param0: globalAndroid.content.Context);
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onMeasure(param0: number, param1: number): void;
				public setTabContainer(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setTransitioning(param0: boolean): void;
				public setStackedBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContextView extends androidx.appcompat.widget.AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContextView>;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public killMode(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public showOverflowMenu(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public initForMode(param0: androidx.appcompat.view.ActionMode): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public isTitleOptional(): boolean;
				public setContentHeight(param0: number): void;
				public setSubtitle(param0: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public setTitleOptional(param0: boolean): void;
				public onDetachedFromWindow(): void;
				public getSubtitle(): string;
				public closeMode(): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public shouldDelayChildPressedState(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarOverlayLayout implements androidx.appcompat.widget.DecorContentParent {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout>;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public hasLogo(): boolean;
				public saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public showOverflowMenu(): boolean;
				public setActionBarHideOffset(param0: number): void;
				public getActionBarHideOffset(): number;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public setIcon(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public getNestedScrollAxes(): number;
				public setWindowTitle(param0: string): void;
				public setUiOptions(param0: number): void;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onWindowVisibilityChanged(param0: number): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public hideOverflowMenu(): boolean;
				public onDetachedFromWindow(): void;
				public setLogo(param0: number): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public setMenuPrepared(): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public initFeature(param0: number): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public isHideOnContentScrollEnabled(): boolean;
				public restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public setOverlayMode(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setShowingForActionMode(param0: boolean): void;
				public isInOverlayMode(): boolean;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public dismissPopups(): void;
				public setHasNonEmbeddedTabs(param0: boolean): void;
				public onWindowSystemUiVisibilityChanged(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public isOverflowMenuShowing(): boolean;
				public setActionBarVisibilityCallback(param0: androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): boolean;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public onStopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ActionBarOverlayLayout {
				export class ActionBarVisibilityCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionBarOverlayLayout$ActionBarVisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowVisibilityChanged(param0: number): void;
						showForSystem(): void;
						hideForSystem(): void;
						enableContentAnimations(param0: boolean): void;
						onContentScrollStarted(): void;
						onContentScrollStopped(): void;
					});
					public constructor();
					public enableContentAnimations(param0: boolean): void;
					public onWindowVisibilityChanged(param0: number): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					public showForSystem(): void;
					public hideForSystem(): void;
				}
				export class LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuPresenter extends androidx.appcompat.view.menu.BaseMenuPresenter {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter>;
				public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public shouldIncludeItem(param0: number, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public showOverflowMenu(): boolean;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
				public flagActionItems(): boolean;
				public setReserveOverflow(param0: boolean): void;
				public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public onSubUiVisibilityChanged(param0: boolean): void;
				public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setWidthLimit(param0: number, param1: boolean): void;
				public dismissPopupMenus(): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public updateMenuView(param0: boolean): void;
				public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
				public getItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public filterLeftoverView(param0: globalAndroid.view.ViewGroup, param1: number): boolean;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
				public getId(): number;
				public setExpandedActionViewsExclusive(param0: boolean): void;
				public isOverflowReserved(): boolean;
				public hideSubMenus(): boolean;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public setItemLimit(param0: number): void;
				public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				public isOverflowMenuShowPending(): boolean;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setMenuView(param0: androidx.appcompat.widget.ActionMenuView): void;
			}
			export module ActionMenuPresenter {
				export class ActionButtonSubmenu extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionButtonSubmenu>;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.menu.SubMenuBuilder, param3: globalAndroid.view.View);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
				}
				export class ActionMenuPopupCallback extends androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionMenuPopupCallback>;
					public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				}
				export class OpenOverflowRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OpenOverflowRunnable>;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup);
					public run(): void;
				}
				export class OverflowMenuButton extends androidx.appcompat.widget.AppCompatImageView implements androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowMenuButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public performClick(): boolean;
					public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class OverflowPopup extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup>;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.menu.MenuBuilder, param3: globalAndroid.view.View, param4: boolean);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
				}
				export class PopupPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.PopupPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public openSubMenuId: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView>;
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener): void;
				public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public generateOverflowButtonLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public setPopupTheme(param0: number): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public showOverflowMenu(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setOverflowReserved(param0: boolean): void;
				public peekMenu(): androidx.appcompat.view.menu.MenuBuilder;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public dismissPopupMenus(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public setPresenter(param0: androidx.appcompat.widget.ActionMenuPresenter): void;
				public isOverflowReserved(): boolean;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setExpandedActionViewsExclusive(param0: boolean): void;
				public getMenu(): globalAndroid.view.Menu;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public getWindowAnimations(): number;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public hasSupportDividerBeforeChildAt(param0: number): boolean;
				public onDetachedFromWindow(): void;
				public getPopupTheme(): number;
				public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
			}
			export module ActionMenuView {
				export class ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuChildView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$ActionMenuChildView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						needsDividerBefore(): boolean;
						needsDividerAfter(): boolean;
					});
					public constructor();
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class LayoutParams extends androidx.appcompat.widget.LinearLayoutCompat.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.LayoutParams>;
					public isOverflowButton: boolean;
					public cellsUsed: number;
					public extraPixels: number;
					public expandable: boolean;
					public preventEdgeOffset: boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: androidx.appcompat.widget.ActionMenuView.LayoutParams);
					public constructor(param0: number, param1: number);
				}
				export class MenuBuilderCallback extends androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.MenuBuilderCallback>;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserModel {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel>;
				public static DEFAULT_HISTORY_FILE_NAME: string;
				public static DEFAULT_HISTORY_MAX_LENGTH: number;
				public setDefaultActivity(param0: number): void;
				public getIntent(): globalAndroid.content.Intent;
				public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
				public chooseActivity(param0: number): globalAndroid.content.Intent;
				public setOnChooseActivityListener(param0: androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener): void;
				public static get(param0: globalAndroid.content.Context, param1: string): androidx.appcompat.widget.ActivityChooserModel;
				public getActivityIndex(param0: globalAndroid.content.pm.ResolveInfo): number;
				public getHistoryMaxSize(): number;
				public setActivitySorter(param0: androidx.appcompat.widget.ActivityChooserModel.ActivitySorter): void;
				public getHistorySize(): number;
				public setHistoryMaxSize(param0: number): void;
				public getActivity(param0: number): globalAndroid.content.pm.ResolveInfo;
				public getActivityCount(): number;
				public setIntent(param0: globalAndroid.content.Intent): void;
			}
			export module ActivityChooserModel {
				export class ActivityChooserModelClient {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivityChooserModelClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
					});
					public constructor();
					public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				}
				export class ActivityResolveInfo extends java.lang.Comparable<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>;
					public resolveInfo: globalAndroid.content.pm.ResolveInfo;
					public weight: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public compareTo(param0: androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo): number;
					public hashCode(): number;
					public constructor(param0: globalAndroid.content.pm.ResolveInfo);
				}
				export class ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivitySorter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivitySorter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
					});
					public constructor();
					public sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class DefaultSorter extends androidx.appcompat.widget.ActivityChooserModel.ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.DefaultSorter>;
					public sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class HistoricalRecord {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>;
					public activity: globalAndroid.content.ComponentName;
					public time: number;
					public weight: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: globalAndroid.content.ComponentName, param1: number, param2: number);
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
				}
				export class OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$OnChooseActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
				}
				export class PersistHistoryAsyncTask extends globalAndroid.os.AsyncTask<any,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.PersistHistoryAsyncTask>;
					public doInBackground(param0: native.Array<any>): java.lang.Void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserView implements androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView>;
				public isShowingPopup(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setExpandActivityOverflowButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setInitialActivityCount(param0: number): void;
				public setDefaultActionButtonContentDescription(param0: number): void;
				public dismissPopup(): boolean;
				public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				public setProvider(param0: androidx.core.view.ActionProvider): void;
				public setExpandActivityOverflowButtonContentDescription(param0: number): void;
				public onAttachedToWindow(): void;
				public showPopup(): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module ActivityChooserView {
				export class ActivityChooserViewAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.ActivityChooserViewAdapter>;
					public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
					public static MAX_ACTIVITY_COUNT_DEFAULT: number;
					public setShowFooterView(param0: boolean): void;
					public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
					public getViewTypeCount(): number;
					public getCount(): number;
					public getShowDefaultActivity(): boolean;
					public setMaxActivityCount(param0: number): void;
					public getActivityCount(): number;
					public measureContentWidth(): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
					public getItem(param0: number): any;
					public getHistorySize(): number;
					public setDataModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
					public getItemViewType(param0: number): number;
					public setShowDefaultActivity(param0: boolean, param1: boolean): void;
					public getItemId(param0: number): number;
				}
				export class Callbacks {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.Callbacks>;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onLongClick(param0: globalAndroid.view.View): boolean;
					public onDismiss(): void;
				}
				export class InnerLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.InnerLayout>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AlertDialogLayout extends androidx.appcompat.widget.LinearLayoutCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.AlertDialogLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatAutoCompleteTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatAutoCompleteTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDropDownBackgroundResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatBackgroundHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatBackgroundHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatButton>;
				public drawableStateChanged(): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setTextSize(param0: number, param1: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getAutoSizeStepGranularity(): number;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public setSupportAllCaps(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getAutoSizeTextType(): number;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getAutoSizeMinTextSize(): number;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public getAutoSizeMaxTextSize(): number;
				public setBackgroundResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckBox {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckBox>;
				public drawableStateChanged(): void;
				public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCompoundPaddingLeft(): number;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setBackgroundResource(param0: number): void;
				public setButtonDrawable(param0: number): void;
				public setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckedTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckedTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public setCheckMarkDrawable(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCompoundButtonHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper>;
			}
			export module AppCompatCompoundButtonHelper {
				export class DirectSetButtonDrawableInterface {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper.DirectSetButtonDrawableInterface>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatCompoundButtonHelper$DirectSetButtonDrawableInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					});
					public constructor();
					public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatDrawableManager {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager>;
				public getDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
				public static preload(): void;
				public static get(): androidx.appcompat.widget.AppCompatDrawableManager;
				public onConfigurationChanged(param0: globalAndroid.content.Context): void;
				public constructor();
				public static getPorterDuffColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEditText {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEditText>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getText(): globalAndroid.text.Editable;
				public setTextClassifier(param0: globalAndroid.view.textclassifier.TextClassifier): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getTextClassifier(): globalAndroid.view.textclassifier.TextClassifier;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatHintHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatHintHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageButton>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageURI(param0: globalAndroid.net.Uri): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public constructor(param0: globalAndroid.content.Context);
				public setImageResource(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
				public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageHelper>;
				public constructor(param0: globalAndroid.widget.ImageView);
				public setImageResource(param0: number): void;
				public loadFromAttributes(param0: globalAndroid.util.AttributeSet, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageURI(param0: globalAndroid.net.Uri): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public constructor(param0: globalAndroid.content.Context);
				public setImageResource(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
				public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatMultiAutoCompleteTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDropDownBackgroundResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatPopupWindow {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatPopupWindow>;
				public showAsDropDown(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): void;
				public update(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public showAsDropDown(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatProgressBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRadioButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRadioButton>;
				public drawableStateChanged(): void;
				public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCompoundPaddingLeft(): number;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setBackgroundResource(param0: number): void;
				public setButtonDrawable(param0: number): void;
				public setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRatingBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRatingBar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBar>;
				public drawableStateChanged(): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBarHelper extends androidx.appcompat.widget.AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSpinner {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner>;
				public drawableStateChanged(): void;
				public getDropDownHorizontalOffset(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setPopupBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setAdapter(param0: globalAndroid.widget.SpinnerAdapter): void;
				public performClick(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public constructor(param0: globalAndroid.content.Context);
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setDropDownVerticalOffset(param0: number): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getPopupContext(): globalAndroid.content.Context;
				public getPrompt(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: globalAndroid.content.res.Resources.Theme);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public setDropDownHorizontalOffset(param0: number): void;
				public setPrompt(param0: string): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setDropDownWidth(param0: number): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getPopupBackground(): globalAndroid.graphics.drawable.Drawable;
				public getDropDownWidth(): number;
				public getDropDownVerticalOffset(): number;
				public onMeasure(param0: number, param1: number): void;
				public setPopupBackgroundResource(param0: number): void;
				public onDetachedFromWindow(): void;
				public setBackgroundResource(param0: number): void;
			}
			export module AppCompatSpinner {
				export class DialogPopup extends androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DialogPopup>;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public isShowing(): boolean;
					public setPromptText(param0: string): void;
					public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
					public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getHorizontalOriginalOffset(): number;
					public getVerticalOffset(): number;
					public show(param0: number, param1: number): void;
					public setVerticalOffset(param0: number): void;
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public dismiss(): void;
					public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
				}
				export class DropDownAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropDownAdapter>;
					public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public isEmpty(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public getViewTypeCount(): number;
					public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItem(param0: number): any;
					public hasStableIds(): boolean;
					public constructor(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.content.res.Resources.Theme);
					public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public isEnabled(param0: number): boolean;
					public getItemViewType(param0: number): number;
					public getItemId(param0: number): number;
				}
				export class DropdownPopup extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropdownPopup>;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public show(): void;
					public setPromptText(param0: string): void;
					public isShowing(): boolean;
					public getListView(): globalAndroid.widget.ListView;
					public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public constructor(param0: androidx.appcompat.widget.AppCompatSpinner, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet, param3: number);
					public getHorizontalOriginalOffset(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getVerticalOffset(): number;
					public show(param0: number, param1: number): void;
					public setVerticalOffset(param0: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
					public dismiss(): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class SpinnerPopup {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatSpinner$SpinnerPopup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setAdapter(param0: globalAndroid.widget.ListAdapter): void;
						show(param0: number, param1: number): void;
						dismiss(): void;
						isShowing(): boolean;
						setPromptText(param0: string): void;
						getHintText(): string;
						setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						setVerticalOffset(param0: number): void;
						setHorizontalOffset(param0: number): void;
						setHorizontalOriginalOffset(param0: number): void;
						getHorizontalOriginalOffset(): number;
						getBackground(): globalAndroid.graphics.drawable.Drawable;
						getVerticalOffset(): number;
						getHorizontalOffset(): number;
					});
					public constructor();
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public isShowing(): boolean;
					public setPromptText(param0: string): void;
					public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getHorizontalOriginalOffset(): number;
					public getVerticalOffset(): number;
					public show(param0: number, param1: number): void;
					public setVerticalOffset(param0: number): void;
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextClassifierHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextClassifierHelper>;
				public getTextClassifier(): globalAndroid.view.textclassifier.TextClassifier;
				public setTextClassifier(param0: globalAndroid.view.textclassifier.TextClassifier): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper>;
				public setTypefaceByCallback(param0: globalAndroid.graphics.Typeface): void;
				public runOnUiThread(param0: java.lang.Runnable): void;
			}
			export module AppCompatTextHelper {
				export class ApplyTextViewCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.ApplyTextViewCallback>;
					public onFontRetrieved(param0: globalAndroid.graphics.Typeface): void;
					public onFontRetrievalFailed(param0: number): void;
				}
				export module ApplyTextViewCallback {
					export class TypefaceApplyCallback {
						public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.ApplyTextViewCallback.TypefaceApplyCallback>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView>;
				public drawableStateChanged(): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public getTextMetricsParamsCompat(): androidx.core.text.PrecomputedTextCompat.Params;
				public setSupportCompoundDrawablesTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setTextSize(param0: number, param1: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getAutoSizeStepGranularity(): number;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public getLastBaselineToBottomHeight(): number;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public getFirstBaselineToTopHeight(): number;
				public setTextMetricsParamsCompat(param0: androidx.core.text.PrecomputedTextCompat.Params): void;
				public setCompoundDrawablesRelative(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(param0: globalAndroid.content.Context);
				public setCompoundDrawablesWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getTextClassifier(): globalAndroid.view.textclassifier.TextClassifier;
				public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportCompoundDrawablesTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setFirstBaselineToTopHeight(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getAutoSizeTextType(): number;
				public setPrecomputedText(param0: androidx.core.text.PrecomputedTextCompat): void;
				public setTextClassifier(param0: globalAndroid.view.textclassifier.TextClassifier): void;
				public setCompoundDrawablesWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextFuture(param0: java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>): void;
				public getAutoSizeMinTextSize(): number;
				public getText(): string;
				public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
				public onMeasure(param0: number, param1: number): void;
				public getAutoSizeMaxTextSize(): number;
				public setLineHeight(param0: number): void;
				public setLastBaselineToBottomHeight(param0: number): void;
				public setCompoundDrawables(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
				public setTypeface(param0: globalAndroid.graphics.Typeface, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextViewAutoSizeHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatToggleButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatToggleButton>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ButtonBarLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ButtonBarLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onMeasure(param0: number, param1: number): void;
				public getMinimumHeight(): number;
				public setAllowStacking(param0: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ContentFrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout>;
				public dispatchFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
				public getFixedWidthMinor(): globalAndroid.util.TypedValue;
				public getFixedHeightMinor(): globalAndroid.util.TypedValue;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMinWidthMinor(): globalAndroid.util.TypedValue;
				public constructor(param0: globalAndroid.content.Context);
				public setAttachListener(param0: androidx.appcompat.widget.ContentFrameLayout.OnAttachListener): void;
				public onMeasure(param0: number, param1: number): void;
				public getMinWidthMajor(): globalAndroid.util.TypedValue;
				public getFixedWidthMajor(): globalAndroid.util.TypedValue;
				public onDetachedFromWindow(): void;
				public getFixedHeightMajor(): globalAndroid.util.TypedValue;
				public onAttachedToWindow(): void;
				public setDecorPadding(param0: number, param1: number, param2: number, param3: number): void;
			}
			export module ContentFrameLayout {
				export class OnAttachListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout.OnAttachListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ContentFrameLayout$OnAttachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDetachedFromWindow(): void;
						onAttachedFromWindow(): void;
					});
					public constructor();
					public onDetachedFromWindow(): void;
					public onAttachedFromWindow(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorContentParent {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorContentParent>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorContentParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					initFeature(param0: number): void;
					setUiOptions(param0: number): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					dismissPopups(): void;
				});
				public constructor();
				public hasLogo(): boolean;
				public saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public showOverflowMenu(): boolean;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public dismissPopups(): void;
				public initFeature(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public hideOverflowMenu(): boolean;
				public isOverflowMenuShowPending(): boolean;
				public setLogo(param0: number): void;
				public setMenuPrepared(): void;
				public setWindowTitle(param0: string): void;
				public setUiOptions(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorToolbar>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorToolbar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getViewGroup(): globalAndroid.view.ViewGroup;
					getContext(): globalAndroid.content.Context;
					hasExpandedActionView(): boolean;
					collapseActionView(): void;
					setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					setTitle(param0: string): void;
					getSubtitle(): string;
					setSubtitle(param0: string): void;
					initProgress(): void;
					initIndeterminateProgress(): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					dismissPopupMenus(): void;
					getDisplayOptions(): number;
					setDisplayOptions(param0: number): void;
					setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
					hasEmbeddedTabs(): boolean;
					isTitleTruncated(): boolean;
					setCollapsible(param0: boolean): void;
					setHomeButtonEnabled(param0: boolean): void;
					getNavigationMode(): number;
					setNavigationMode(param0: number): void;
					setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
					setDropdownSelectedPosition(param0: number): void;
					getDropdownSelectedPosition(): number;
					getDropdownItemCount(): number;
					setCustomView(param0: globalAndroid.view.View): void;
					getCustomView(): globalAndroid.view.View;
					animateToVisibility(param0: number): void;
					setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
					setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setNavigationIcon(param0: number): void;
					setNavigationContentDescription(param0: string): void;
					setNavigationContentDescription(param0: number): void;
					setDefaultNavigationContentDescription(param0: number): void;
					setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					getHeight(): number;
					setVisibility(param0: number): void;
					getVisibility(): number;
					setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					getMenu(): globalAndroid.view.Menu;
				});
				public constructor();
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownSelectedPosition(): number;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public setDisplayOptions(param0: number): void;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getMenu(): globalAndroid.view.Menu;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public initProgress(): void;
				public setCollapsible(param0: boolean): void;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public getCustomView(): globalAndroid.view.View;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public getDisplayOptions(): number;
				public dismissPopupMenus(): void;
				public setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getViewGroup(): globalAndroid.view.ViewGroup;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DialogTitle extends androidx.appcompat.widget.AppCompatTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.DialogTitle>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DropDownListView {
				public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView>;
				public static INVALID_POSITION: number;
				public static NO_POSITION: number;
				public drawableStateChanged(): void;
				public hasFocus(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public isInTouchMode(): boolean;
				public onForwardedEvent(param0: globalAndroid.view.MotionEvent, param1: number): boolean;
				public setSelector(param0: globalAndroid.graphics.drawable.Drawable): void;
				public isFocused(): boolean;
				public hasWindowFocus(): boolean;
				public onDetachedFromWindow(): void;
				public lookForSelectablePosition(param0: number, param1: boolean): number;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public measureHeightOfChildrenCompat(param0: number, param1: number, param2: number, param3: number, param4: number): number;
			}
			export module DropDownListView {
				export class GateKeeperDrawable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.GateKeeperDrawable>;
					public setHotspot(param0: number, param1: number): void;
					public setState(param0: native.Array<number>): boolean;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				}
				export class ResolveHoverRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.ResolveHoverRunnable>;
					public run(): void;
					public cancel(): void;
					public post(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsFrameLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsFrameLayout>;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsLinearLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsLinearLayout>;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				});
				public constructor();
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
			}
			export module FitWindowsViewGroup {
				export class OnFitSystemWindowsListener {
					public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup$OnFitSystemWindowsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
					});
					public constructor();
					public onFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class ForwardingListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener>;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
				public onForwardingStopped(): boolean;
				public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
				public onForwardingStarted(): boolean;
				public constructor(param0: globalAndroid.view.View);
			}
			export module ForwardingListener {
				export class DisallowIntercept {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.DisallowIntercept>;
					public run(): void;
				}
				export class TriggerLongPress {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.TriggerLongPress>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class LinearLayoutCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static SHOW_DIVIDER_NONE: number;
				public static SHOW_DIVIDER_BEGINNING: number;
				public static SHOW_DIVIDER_MIDDLE: number;
				public static SHOW_DIVIDER_END: number;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getDividerDrawable(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getOrientation(): number;
				public isBaselineAligned(): boolean;
				public isMeasureWithLargestChildEnabled(): boolean;
				public getGravity(): number;
				public setVerticalGravity(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public getShowDividers(): number;
				public setBaselineAlignedChildIndex(param0: number): void;
				public setBaselineAligned(param0: boolean): void;
				public setGravity(param0: number): void;
				public setHorizontalGravity(param0: number): void;
				public setWeightSum(param0: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public getDividerWidth(): number;
				public getDividerPadding(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDividerPadding(param0: number): void;
				public getBaselineAlignedChildIndex(): number;
				public setOrientation(param0: number): void;
				public setMeasureWithLargestChildEnabled(param0: boolean): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onMeasure(param0: number, param1: number): void;
				public getWeightSum(): number;
				public setShowDividers(param0: number): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setDividerDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public shouldDelayChildPressedState(): boolean;
				public getBaseline(): number;
				public hasDividerBeforeChildAt(param0: number): boolean;
			}
			export module LinearLayoutCompat {
				export class DividerMode {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.DividerMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$DividerMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.LayoutParams>;
					public weight: number;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
				export class OrientationMode {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.OrientationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$OrientationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ListPopupWindow extends androidx.appcompat.view.menu.ShowableListMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow>;
				public static POSITION_PROMPT_ABOVE: number;
				public static POSITION_PROMPT_BELOW: number;
				public static MATCH_PARENT: number;
				public static WRAP_CONTENT: number;
				public static INPUT_METHOD_FROM_FOCUSABLE: number;
				public static INPUT_METHOD_NEEDED: number;
				public static INPUT_METHOD_NOT_NEEDED: number;
				public setListSelector(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setHeight(param0: number): void;
				public setDropDownAlwaysVisible(param0: boolean): void;
				public getHeight(): number;
				public getSelectedItem(): any;
				public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public createDragToOpenListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
				public setOnItemClickListener(param0: globalAndroid.widget.AdapterView.OnItemClickListener): void;
				public getListView(): globalAndroid.widget.ListView;
				public setOverlapAnchor(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public show(): void;
				public isShowing(): boolean;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getBackground(): globalAndroid.graphics.drawable.Drawable;
				public setInputMethodMode(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setModal(param0: boolean): void;
				public setForceIgnoreOutsideTouch(param0: boolean): void;
				public setSelection(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getSoftInputMode(): number;
				public postShow(): void;
				public getVerticalOffset(): number;
				public clearListSelection(): void;
				public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
				public setWidth(param0: number): void;
				public isDropDownAlwaysVisible(): boolean;
				public getSelectedItemPosition(): number;
				public setAnimationStyle(param0: number): void;
				public setEpicenterBounds(param0: globalAndroid.graphics.Rect): void;
				public setVerticalOffset(param0: number): void;
				public getInputMethodMode(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getEpicenterBounds(): globalAndroid.graphics.Rect;
				public dismiss(): void;
				public setHorizontalOffset(param0: number): void;
				public isModal(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public getSelectedView(): globalAndroid.view.View;
				public getHorizontalOffset(): number;
				public setPromptView(param0: globalAndroid.view.View): void;
				public isInputMethodNotNeeded(): boolean;
				public setDropDownGravity(param0: number): void;
				public setWindowLayoutType(param0: number): void;
				public onKeyPreIme(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getAnimationStyle(): number;
				public setContentWidth(param0: number): void;
				public getPromptPosition(): number;
				public getAnchorView(): globalAndroid.view.View;
				public setAnchorView(param0: globalAndroid.view.View): void;
				public getWidth(): number;
				public setSoftInputMode(param0: number): void;
				public performItemClick(param0: number): boolean;
				public setPromptPosition(param0: number): void;
				public getSelectedItemId(): number;
			}
			export module ListPopupWindow {
				export class ListSelectorHider {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ListSelectorHider>;
					public run(): void;
				}
				export class PopupDataSetObserver {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class PopupScrollListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupScrollListener>;
					public onScrollStateChanged(param0: globalAndroid.widget.AbsListView, param1: number): void;
					public onScroll(param0: globalAndroid.widget.AbsListView, param1: number, param2: number, param3: number): void;
				}
				export class PopupTouchInterceptor {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupTouchInterceptor>;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				}
				export class ResizePopupRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ResizePopupRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuItemHoverListener>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.MenuItemHoverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
					onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				});
				public constructor();
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuPopupWindow extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setEnterTransition(param0: any): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public getListView(): globalAndroid.widget.ListView;
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public setTouchModal(param0: boolean): void;
				public dismiss(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public show(): void;
				public setExitTransition(param0: any): void;
				public setHoverListener(param0: androidx.appcompat.widget.MenuItemHoverListener): void;
				public isShowing(): boolean;
				public constructor(param0: globalAndroid.content.Context);
			}
			export module MenuPopupWindow {
				export class MenuDropDownListView extends androidx.appcompat.widget.DropDownListView {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.MenuDropDownListView>;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public setHoverListener(param0: androidx.appcompat.widget.MenuItemHoverListener): void;
					public clearSelection(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class PopupMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: number, param4: number);
				public inflate(param0: number): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getDragToOpenListener(): globalAndroid.view.View.OnTouchListener;
				public dismiss(): void;
				public getMenu(): globalAndroid.view.Menu;
				public show(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number);
				public getGravity(): number;
				public setOnDismissListener(param0: androidx.appcompat.widget.PopupMenu.OnDismissListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener): void;
				public setGravity(param0: number): void;
			}
			export module PopupMenu {
				export class OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnDismissListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
					});
					public constructor();
					public onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class RtlSpacingHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.RtlSpacingHelper>;
				public static UNDEFINED: number;
				public getEnd(): number;
				public setDirection(param0: boolean): void;
				public getLeft(): number;
				public getStart(): number;
				public setAbsolute(param0: number, param1: number): void;
				public getRight(): number;
				public setRelative(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ScrollingTabContainerView {
				public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView>;
				public mVisibilityAnim: globalAndroid.view.ViewPropertyAnimator;
				public mVisAnimListener: androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
				public animateToVisibility(param0: number): void;
				public updateTab(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public setContentHeight(param0: number): void;
				public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
				public setTabSelected(param0: number): void;
				public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public setAllowCollapse(param0: boolean): void;
				public animateToTab(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onAttachedToWindow(): void;
			}
			export module ScrollingTabContainerView {
				export class TabAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabAdapter>;
					public getItem(param0: number): any;
					public getCount(): number;
					public getItemId(param0: number): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class TabClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabClickListener>;
					public onClick(param0: globalAndroid.view.View): void;
				}
				export class TabView {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabView>;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView, param1: globalAndroid.content.Context, param2: androidx.appcompat.app.ActionBar.Tab, param3: boolean);
					public onMeasure(param0: number, param1: number): void;
					public setSelected(param0: boolean): void;
					public update(): void;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getTab(): androidx.appcompat.app.ActionBar.Tab;
					public bindTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				}
				export class VisibilityAnimListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener>;
					public withFinalVisibility(param0: globalAndroid.view.ViewPropertyAnimator, param1: number): androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView);
					public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SearchView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.widget.SearchView>;
				public isIconified(): boolean;
				public setMaxWidth(param0: number): void;
				public setIconified(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setAppSearchData(param0: globalAndroid.os.Bundle): void;
				public setIconifiedByDefault(param0: boolean): void;
				public setOnSearchClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public getMaxWidth(): number;
				public isQueryRefinementEnabled(): boolean;
				public setQuery(param0: string, param1: boolean): void;
				public setInputType(param0: number): void;
				public setQueryHint(param0: string): void;
				public getInputType(): number;
				public constructor(param0: globalAndroid.content.Context);
				public isSubmitButtonEnabled(): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setSubmitButtonEnabled(param0: boolean): void;
				public setOnSuggestionListener(param0: androidx.appcompat.widget.SearchView.OnSuggestionListener): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setQueryRefinementEnabled(param0: boolean): void;
				public getQueryHint(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnCloseListener(param0: androidx.appcompat.widget.SearchView.OnCloseListener): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onActionViewExpanded(): void;
				public setOnQueryTextListener(param0: androidx.appcompat.widget.SearchView.OnQueryTextListener): void;
				public setSuggestionsAdapter(param0: androidx.cursoradapter.widget.CursorAdapter): void;
				public getSuggestionsAdapter(): androidx.cursoradapter.widget.CursorAdapter;
				public setSearchableInfo(param0: globalAndroid.app.SearchableInfo): void;
				public getImeOptions(): number;
				public clearFocus(): void;
				public getQuery(): string;
				public onMeasure(param0: number, param1: number): void;
				public requestFocus(param0: number, param1: globalAndroid.graphics.Rect): boolean;
				public onDetachedFromWindow(): void;
				public isIconfiedByDefault(): boolean;
				public setOnQueryTextFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
				public onWindowFocusChanged(param0: boolean): void;
				public onActionViewCollapsed(): void;
				public setImeOptions(param0: number): void;
			}
			export module SearchView {
				export class AutoCompleteTextViewReflector {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.AutoCompleteTextViewReflector>;
				}
				export class OnCloseListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnCloseListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): boolean;
					});
					public constructor();
					public onClose(): boolean;
				}
				export class OnQueryTextListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnQueryTextListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnQueryTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onQueryTextSubmit(param0: string): boolean;
						onQueryTextChange(param0: string): boolean;
					});
					public constructor();
					public onQueryTextSubmit(param0: string): boolean;
					public onQueryTextChange(param0: string): boolean;
				}
				export class OnSuggestionListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnSuggestionListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnSuggestionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuggestionSelect(param0: number): boolean;
						onSuggestionClick(param0: number): boolean;
					});
					public constructor();
					public onSuggestionClick(param0: number): boolean;
					public onSuggestionSelect(param0: number): boolean;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.SearchView.SavedState>;
					public toString(): string;
					public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class SearchAutoComplete extends androidx.appcompat.widget.AppCompatAutoCompleteTextView {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SearchAutoComplete>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public enoughToFilter(): boolean;
					public performCompletion(): void;
					public replaceText(param0: string): void;
					public onKeyPreIme(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onFinishInflate(): void;
					public setThreshold(param0: number): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				}
				export class UpdatableTouchDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.UpdatableTouchDelegate>;
					public setBounds(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect): void;
					public constructor(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: globalAndroid.view.View);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ShareActionProvider {
				public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider>;
				public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
				public setOnShareTargetSelectedListener(param0: androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public onCreateActionView(): globalAndroid.view.View;
				public hasSubMenu(): boolean;
				public setShareIntent(param0: globalAndroid.content.Intent): void;
				public setShareHistoryFileName(param0: string): void;
				public onPrepareSubMenu(param0: globalAndroid.view.SubMenu): void;
			}
			export module ShareActionProvider {
				export class OnShareTargetSelectedListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ShareActionProvider$OnShareTargetSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: globalAndroid.content.Intent): boolean;
				}
				export class ShareActivityChooserModelPolicy extends androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareActivityChooserModelPolicy>;
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
				}
				export class ShareMenuItemOnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareMenuItemOnMenuItemClickListener>;
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SuggestionsAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter>;
				public setQueryRefinement(param0: number): void;
				public close(): void;
				public notifyDataSetChanged(): void;
				public changeCursor(param0: globalAndroid.database.Cursor): void;
				public convertToString(param0: globalAndroid.database.Cursor): string;
				public onClick(param0: globalAndroid.view.View): void;
				public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public hasStableIds(): boolean;
				public newView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public static getColumnString(param0: globalAndroid.database.Cursor, param1: string): string;
				public getQueryRefinement(): number;
				public bindView(param0: globalAndroid.view.View, param1: globalAndroid.content.Context, param2: globalAndroid.database.Cursor): void;
				public notifyDataSetInvalidated(): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.SearchView, param2: globalAndroid.app.SearchableInfo, param3: java.util.WeakHashMap<string,globalAndroid.graphics.drawable.Drawable.ConstantState>);
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
			}
			export module SuggestionsAdapter {
				export class ChildViewCache {
					public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter.ChildViewCache>;
					public mText1: globalAndroid.widget.TextView;
					public mText2: globalAndroid.widget.TextView;
					public mIcon1: globalAndroid.widget.ImageView;
					public mIcon2: globalAndroid.widget.ImageView;
					public mIconRefine: globalAndroid.widget.ImageView;
					public constructor(param0: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SwitchCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat>;
				public setChecked(param0: boolean): void;
				public setTrackTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public drawableHotspotChanged(param0: number, param1: number): void;
				public setTrackDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTextOff(): string;
				public setThumbTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public setTextOn(param0: string): void;
				public getTrackTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateDrawableState(param0: number): native.Array<number>;
				public setSwitchTypeface(param0: globalAndroid.graphics.Typeface, param1: number): void;
				public setThumbTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setThumbResource(param0: number): void;
				public getTextOn(): string;
				public setThumbTextPadding(param0: number): void;
				public getThumbTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getSplitTrack(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTrackTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setTextOff(param0: string): void;
				public setSwitchMinWidth(param0: number): void;
				public onPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public drawableStateChanged(): void;
				public setShowText(param0: boolean): void;
				public jumpDrawablesToCurrentState(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getThumbTextPadding(): number;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setSwitchTypeface(param0: globalAndroid.graphics.Typeface): void;
				public setSplitTrack(param0: boolean): void;
				public setSwitchTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public toggle(): void;
				public getSwitchMinWidth(): number;
				public setSwitchPadding(param0: number): void;
				public getThumbTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSwitchPadding(): number;
				public constructor(param0: globalAndroid.content.Context);
				public getTrackDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public getCompoundPaddingLeft(): number;
				public getThumbDrawable(): globalAndroid.graphics.drawable.Drawable;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public setThumbDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public setTrackTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getShowText(): boolean;
				public onMeasure(param0: number, param1: number): void;
				public getCompoundPaddingRight(): number;
				public setTrackResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemeUtils {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemeUtils>;
				public static createDisabledStateList(param0: number, param1: number): globalAndroid.content.res.ColorStateList;
				public static getThemeAttrColor(param0: globalAndroid.content.Context, param1: number): number;
				public static getThemeAttrColorStateList(param0: globalAndroid.content.Context, param1: number): globalAndroid.content.res.ColorStateList;
				public static getDisabledThemeAttrColor(param0: globalAndroid.content.Context, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemedSpinnerAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.ThemedSpinnerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				});
				public constructor();
				public setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
				public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
			}
			export module ThemedSpinnerAdapter {
				export class Helper {
					public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter.Helper>;
					public constructor(param0: globalAndroid.content.Context);
					public setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					public getDropDownViewInflater(): globalAndroid.view.LayoutInflater;
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintTypedArray {
				public static class: java.lang.Class<androidx.appcompat.widget.TintTypedArray>;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: number, param2: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
				public recycle(): void;
				public getString(param0: number): string;
				public peekValue(param0: number): globalAndroid.util.TypedValue;
				public getFraction(param0: number, param1: number, param2: number, param3: number): number;
				public getFloat(param0: number, param1: number): number;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
				public getPositionDescription(): string;
				public hasValue(param0: number): boolean;
				public getNonResourceString(param0: number): string;
				public getInt(param0: number, param1: number): number;
				public getTextArray(param0: number): native.Array<string>;
				public getIndex(param0: number): number;
				public getInteger(param0: number, param1: number): number;
				public getText(param0: number): string;
				public getIndexCount(): number;
				public getDimensionPixelSize(param0: number, param1: number): number;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>, param3: number, param4: number): androidx.appcompat.widget.TintTypedArray;
				public getFont(param0: number, param1: number, param2: androidx.core.content.res.ResourcesCompat.FontCallback): globalAndroid.graphics.Typeface;
				public getLayoutDimension(param0: number, param1: number): number;
				public getResources(): globalAndroid.content.res.Resources;
				public length(): number;
				public getChangingConfigurations(): number;
				public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
				public getColor(param0: number, param1: number): number;
				public getColorStateList(param0: number): globalAndroid.content.res.ColorStateList;
				public getBoolean(param0: number, param1: boolean): boolean;
				public getResourceId(param0: number, param1: number): number;
				public getDimension(param0: number, param1: number): number;
				public getLayoutDimension(param0: number, param1: string): number;
				public getType(param0: number): number;
				public getDrawableIfKnown(param0: number): globalAndroid.graphics.drawable.Drawable;
				public getValue(param0: number, param1: globalAndroid.util.TypedValue): boolean;
				public getDimensionPixelOffset(param0: number, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class Toolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.Toolbar>;
				public setLogoDescription(param0: number): void;
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.Toolbar.OnMenuItemClickListener): void;
				public setPopupTheme(param0: number): void;
				public setCollapseContentDescription(param0: string): void;
				public showOverflowMenu(): boolean;
				public getContentInsetLeft(): number;
				public getTitleMarginBottom(): number;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public setTitleMarginStart(param0: number): void;
				public setTitle(param0: string): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitle(param0: number): void;
				public setTitleMarginBottom(param0: number): void;
				public setSubtitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public getNavigationContentDescription(): string;
				public getContentInsetStartWithNavigation(): number;
				public getLogo(): globalAndroid.graphics.drawable.Drawable;
				public getContentInsetEndWithActions(): number;
				public setContentInsetsRelative(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public collapseActionView(): void;
				public setTitleMargin(param0: number, param1: number, param2: number, param3: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getCollapseContentDescription(): string;
				public getTitleMarginStart(): number;
				public getMenu(): globalAndroid.view.Menu;
				public setLogoDescription(param0: string): void;
				public setNavigationContentDescription(param0: number): void;
				public getContentInsetEnd(): number;
				public hideOverflowMenu(): boolean;
				public setCollapseIcon(param0: number): void;
				public setSubtitle(param0: string): void;
				public setNavigationContentDescription(param0: string): void;
				public setLogo(param0: number): void;
				public onDetachedFromWindow(): void;
				public getSubtitle(): string;
				public setCollapseContentDescription(param0: number): void;
				public setSubtitle(param0: number): void;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCurrentContentInsetRight(): number;
				public setTitleMarginEnd(param0: number): void;
				public onRtlPropertiesChanged(param0: number): void;
				public setSubtitleTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getCollapseIcon(): globalAndroid.graphics.drawable.Drawable;
				public getTitleMarginTop(): number;
				public getContentInsetRight(): number;
				public getCurrentContentInsetEnd(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public inflateMenu(param0: number): void;
				public setCollapsible(param0: boolean): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.Toolbar.LayoutParams;
				public getNavigationIcon(): globalAndroid.graphics.drawable.Drawable;
				public setMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.widget.ActionMenuPresenter): void;
				public getTitleMarginEnd(): number;
				public setNavigationOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getCurrentContentInsetStart(): number;
				public dismissPopupMenus(): void;
				public getLogoDescription(): string;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setSubtitleTextColor(param0: number): void;
				public setContentInsetStartWithNavigation(param0: number): void;
				public setCollapseIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.Toolbar.LayoutParams;
				public setContentInsetsAbsolute(param0: number, param1: number): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.Toolbar.LayoutParams;
				public isTitleTruncated(): boolean;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitleTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setContentInsetEndWithActions(param0: number): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public setTitleTextColor(param0: number): void;
				public isOverflowMenuShowing(): boolean;
				public setTitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
				public setTitleMarginTop(param0: number): void;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public getCurrentContentInsetLeft(): number;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getContentInsetStart(): number;
				public getPopupTheme(): number;
				public getWrapper(): androidx.appcompat.widget.DecorToolbar;
			}
			export module Toolbar {
				export class ExpandedActionViewMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.ExpandedActionViewMenuPresenter>;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
				export class LayoutParams extends androidx.appcompat.app.ActionBar.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.LayoutParams>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: androidx.appcompat.widget.Toolbar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.Toolbar$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.Toolbar.SavedState>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: globalAndroid.os.Parcelable);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ToolbarWidgetWrapper extends androidx.appcompat.widget.DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.ToolbarWidgetWrapper>;
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public constructor(param0: androidx.appcompat.widget.Toolbar, param1: boolean);
				public setTitle(param0: string): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownSelectedPosition(): number;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public setDisplayOptions(param0: number): void;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getMenu(): globalAndroid.view.Menu;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public constructor(param0: androidx.appcompat.widget.Toolbar, param1: boolean, param2: number, param3: number);
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public initProgress(): void;
				public setCollapsible(param0: boolean): void;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public getCustomView(): globalAndroid.view.View;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public getDisplayOptions(): number;
				public dismissPopupMenus(): void;
				public setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getViewGroup(): globalAndroid.view.ViewGroup;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompat>;
				public static setTooltipText(param0: globalAndroid.view.View, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompatHandler {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompatHandler>;
				public onLongClick(param0: globalAndroid.view.View): boolean;
				public onHover(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
				public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
				public static setTooltipText(param0: globalAndroid.view.View, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipPopup {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipPopup>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewStubCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat>;
				public setLayoutInflater(param0: globalAndroid.view.LayoutInflater): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInflatedId(): number;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public setInflatedId(param0: number): void;
				public setVisibility(param0: number): void;
				public setOnInflateListener(param0: androidx.appcompat.widget.ViewStubCompat.OnInflateListener): void;
				public setLayoutResource(param0: number): void;
				public getLayoutResource(): number;
				public onMeasure(param0: number, param1: number): void;
				public inflate(): globalAndroid.view.View;
				public getLayoutInflater(): globalAndroid.view.LayoutInflater;
			}
			export module ViewStubCompat {
				export class OnInflateListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat.OnInflateListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ViewStubCompat$OnInflateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: globalAndroid.view.View): void;
					});
					public constructor();
					public onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewUtils {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewUtils>;
				public static isLayoutRtl(param0: globalAndroid.view.View): boolean;
				public static makeOptionalFitsSystemWindows(param0: globalAndroid.view.View): void;
				public static computeFitSystemWindows(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class WithHint {
				public static class: java.lang.Class<androidx.appcompat.widget.WithHint>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.WithHint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHint(): string;
				});
				public constructor();
				public getHint(): string;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteActionProvider {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider>;
				public isVisible(): boolean;
				public setAlwaysVisible(param0: boolean): void;
				public setDialogFactory(param0: androidx.mediarouter.app.MediaRouteDialogFactory): void;
				public onPerformDefaultAction(): boolean;
				public overridesItemVisibility(): boolean;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreateMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
				public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public getMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
				public constructor(param0: globalAndroid.content.Context);
				public enableDynamicGroup(): void;
				public onCreateActionView(): globalAndroid.view.View;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
			export module MediaRouteActionProvider {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider.MediaRouterCallback>;
					public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public constructor();
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public constructor(param0: androidx.mediarouter.app.MediaRouteActionProvider);
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteButton {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton>;
				public drawableStateChanged(): void;
				public setAlwaysVisible(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setDialogFactory(param0: androidx.mediarouter.app.MediaRouteDialogFactory): void;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public performClick(): boolean;
				public setRemoteIndicatorDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public showDialog(): boolean;
				public setVisibility(param0: number): void;
				public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public onCreateDrawableState(param0: number): native.Array<number>;
				public enableDynamicGroup(): void;
				public onAttachedToWindow(): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
			export module MediaRouteButton {
				export class ConnectivityReceiver {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.ConnectivityReceiver>;
					public isConnected(): boolean;
					public unregisterReceiver(param0: androidx.mediarouter.app.MediaRouteButton): void;
					public registerReceiver(param0: androidx.mediarouter.app.MediaRouteButton): void;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.MediaRouterCallback>;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RemoteIndicatorLoader extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.drawable.Drawable> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.RemoteIndicatorLoader>;
					public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.drawable.Drawable;
					public onPostExecute(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onCancelled(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteChooserDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog>;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public refreshRoutes(): void;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public setTitle(param0: string): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTitle(param0: number): void;
				public onDetachedFromWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onAttachedToWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module MediaRouteChooserDialog {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.MediaRouterCallback>;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RouteAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo> implements globalAndroid.widget.AdapterView.OnItemClickListener  {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteAdapter>;
					public areAllItemsEnabled(): boolean;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public isEnabled(param0: number): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator>;
					public static sInstance: androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator;
					public compare(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteChooserDialogFragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialogFragment>;
				public onCreateDynamicChooserDialog(param0: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteDynamicChooserDialog;
				public onCreateChooserDialog(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): androidx.mediarouter.app.MediaRouteChooserDialog;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteControllerDialog extends androidx.appcompat.app.AlertDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog>;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onCreateMediaControlView(param0: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setVolumeControlEnabled(param0: boolean): void;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public isVolumeControlEnabled(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public getRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public getMediaControlView(): globalAndroid.view.View;
				public onDetachedFromWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onAttachedToWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module MediaRouteControllerDialog {
				export class ClickListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.ClickListener>;
					public onClick(param0: globalAndroid.view.View): void;
				}
				export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.FetchArtTask>;
					public getIconBitmap(): globalAndroid.graphics.Bitmap;
					public onPreExecute(): void;
					public getIconUri(): globalAndroid.net.Uri;
					public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
					public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
				}
				export class MediaControllerCallback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaControllerCallback>;
					public onSessionDestroyed(): void;
					public onMetadataChanged(param0: globalAndroid.support.v4.media.MediaMetadataCompat): void;
					public onPlaybackStateChanged(param0: globalAndroid.support.v4.media.session.PlaybackStateCompat): void;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaRouterCallback>;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteVolumeChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class VolumeChangeListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeChangeListener>;
					public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
					public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
					public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
				}
				export class VolumeGroupAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeGroupAdapter>;
					public isEnabled(param0: number): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteControllerDialogFragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialogFragment>;
				public onCreateDynamicControllerDialog(param0: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteDynamicControllerDialog;
				public onCreateControllerDialog(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): androidx.mediarouter.app.MediaRouteControllerDialog;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDialogFactory {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogFactory>;
				public onCreateChooserDialogFragment(): androidx.mediarouter.app.MediaRouteChooserDialogFragment;
				public onCreateControllerDialogFragment(): androidx.mediarouter.app.MediaRouteControllerDialogFragment;
				public static getDefault(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDialogHelper {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogHelper>;
				public static getItemsAdded(param0: java.util.List, param1: java.util.List): java.util.Set;
				public static getItemBoundMap(param0: globalAndroid.widget.ListView, param1: globalAndroid.widget.ArrayAdapter): java.util.HashMap;
				public static listUnorderedEquals(param0: java.util.List, param1: java.util.List): boolean;
				public static getItemsRemoved(param0: java.util.List, param1: java.util.List): java.util.Set;
				public static getItemBitmapMap(param0: globalAndroid.content.Context, param1: globalAndroid.widget.ListView, param2: globalAndroid.widget.ArrayAdapter): java.util.HashMap;
				public static getDialogWidthForDynamicGroup(param0: globalAndroid.content.Context): number;
				public static getDialogWidth(param0: globalAndroid.content.Context): number;
				public static getDialogHeight(param0: globalAndroid.content.Context): number;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDiscoveryFragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDiscoveryFragment>;
				public onPrepareCallbackFlags(): number;
				public getMediaRouter(): androidx.mediarouter.media.MediaRouter;
				public onStart(): void;
				public onCreateCallback(): androidx.mediarouter.media.MediaRouter.Callback;
				public onStop(): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDynamicChooserDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog>;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public refreshRoutes(): void;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onAttachedToWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module MediaRouteDynamicChooserDialog {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.MediaRouterCallback>;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getItemCount(): number;
					public getItem(param0: number): androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
				}
				export module RecyclerAdapter {
					export class HeaderViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.HeaderViewHolder>;
						public bindHeaderView(param0: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item): void;
					}
					export class Item {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item>;
						public getType(): number;
						public getData(): any;
					}
					export class RouteViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.RouteViewHolder>;
						public bindRouteView(param0: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item): void;
					}
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RouteComparator>;
					public static sInstance: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RouteComparator;
					public compare(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDynamicControllerDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog>;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onAttachedToWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module MediaRouteDynamicControllerDialog {
				export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.FetchArtTask>;
					public onPreExecute(): void;
					public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
					public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
				}
				export class MediaControllerCallback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaControllerCallback>;
					public onSessionDestroyed(): void;
					public onMetadataChanged(param0: globalAndroid.support.v4.media.MediaMetadataCompat): void;
				}
				export abstract class MediaRouteVolumeSliderHolder {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder>;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouterCallback>;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteVolumeChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public getItem(param0: number): androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.Item;
					public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export module RecyclerAdapter {
					export class GroupViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.GroupViewHolder>;
					}
					export class GroupVolumeViewHolder extends androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.GroupVolumeViewHolder>;
					}
					export class HeaderViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.HeaderViewHolder>;
					}
					export class Item {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.Item>;
						public getType(): number;
						public getData(): any;
					}
					export class RouteViewHolder extends androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.RouteViewHolder>;
					}
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RouteComparator>;
					public compare(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
				}
				export class VolumeChangeListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.VolumeChangeListener>;
					public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
					public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
					public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteExpandCollapseButton extends androidx.appcompat.widget.AppCompatImageButton {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteExpandCollapseButton>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteVolumeSlider extends androidx.appcompat.widget.AppCompatSeekBar {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteVolumeSlider>;
				public drawableStateChanged(): void;
				public setThumb(param0: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setColor(param0: number, param1: number): void;
				public setColor(param0: number): void;
				public setHideThumb(param0: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouterThemeHelper {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouterThemeHelper>;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class OverlayListView {
				public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView>;
				public stopAnimationAll(): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public startAnimationAll(): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addOverlayObject(param0: androidx.mediarouter.app.OverlayListView.OverlayObject): void;
			}
			export module OverlayListView {
				export class OverlayObject {
					public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject>;
					public setDuration(param0: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public stopAnimation(): void;
					public setAnimationEndListener(param0: androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public setAlphaAnimation(param0: number, param1: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public constructor(param0: globalAndroid.graphics.drawable.BitmapDrawable, param1: globalAndroid.graphics.Rect);
					public setTranslateYAnimation(param0: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public startAnimation(param0: number): void;
					public update(param0: number): boolean;
					public setInterpolator(param0: globalAndroid.view.animation.Interpolator): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public isAnimationStarted(): boolean;
					public getBitmapDrawable(): globalAndroid.graphics.drawable.BitmapDrawable;
				}
				export module OverlayObject {
					export class OnAnimationEndListener {
						public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener>;
						/**
						 * Constructs a new instance of the androidx.mediarouter.app.OverlayListView$OverlayObject$OnAnimationEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationEnd(): void;
						});
						public constructor();
						public onAnimationEnd(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaControlIntent {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaControlIntent>;
				public static CATEGORY_LIVE_AUDIO: string;
				public static CATEGORY_LIVE_VIDEO: string;
				public static CATEGORY_REMOTE_PLAYBACK: string;
				public static ACTION_PLAY: string;
				public static ACTION_ENQUEUE: string;
				public static ACTION_SEEK: string;
				public static ACTION_GET_STATUS: string;
				public static ACTION_REMOVE: string;
				public static ACTION_PAUSE: string;
				public static ACTION_RESUME: string;
				public static ACTION_STOP: string;
				public static ACTION_START_SESSION: string;
				public static ACTION_GET_SESSION_STATUS: string;
				public static ACTION_END_SESSION: string;
				public static ACTION_SEND_MESSAGE: string;
				public static EXTRA_SESSION_ID: string;
				public static EXTRA_SESSION_STATUS: string;
				public static EXTRA_SESSION_STATUS_UPDATE_RECEIVER: string;
				public static EXTRA_MESSAGE_RECEIVER: string;
				public static EXTRA_ITEM_ID: string;
				public static EXTRA_ITEM_STATUS: string;
				public static EXTRA_ITEM_CONTENT_POSITION: string;
				public static EXTRA_ITEM_METADATA: string;
				public static EXTRA_ITEM_HTTP_HEADERS: string;
				public static EXTRA_ITEM_STATUS_UPDATE_RECEIVER: string;
				public static EXTRA_MESSAGE: string;
				public static EXTRA_ERROR_CODE: string;
				public static ERROR_UNKNOWN: number;
				public static ERROR_UNSUPPORTED_OPERATION: number;
				public static ERROR_INVALID_SESSION_ID: number;
				public static ERROR_INVALID_ITEM_ID: number;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaItemMetadata {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaItemMetadata>;
				public static KEY_ALBUM_ARTIST: string;
				public static KEY_ALBUM_TITLE: string;
				public static KEY_ARTWORK_URI: string;
				public static KEY_ARTIST: string;
				public static KEY_AUTHOR: string;
				public static KEY_COMPOSER: string;
				public static KEY_TITLE: string;
				public static KEY_YEAR: string;
				public static KEY_TRACK_NUMBER: string;
				public static KEY_DISC_NUMBER: string;
				public static KEY_DURATION: string;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaItemStatus {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus>;
				public static PLAYBACK_STATE_PENDING: number;
				public static PLAYBACK_STATE_PLAYING: number;
				public static PLAYBACK_STATE_PAUSED: number;
				public static PLAYBACK_STATE_BUFFERING: number;
				public static PLAYBACK_STATE_FINISHED: number;
				public static PLAYBACK_STATE_CANCELED: number;
				public static PLAYBACK_STATE_INVALIDATED: number;
				public static PLAYBACK_STATE_ERROR: number;
				public static EXTRA_HTTP_STATUS_CODE: string;
				public static EXTRA_HTTP_RESPONSE_HEADERS: string;
				public getPlaybackState(): number;
				public getExtras(): globalAndroid.os.Bundle;
				public getContentPosition(): number;
				public getContentDuration(): number;
				public toString(): string;
				public getTimestamp(): number;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaItemStatus {
				export class Builder {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus.Builder>;
					public setTimestamp(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus.Builder;
					public setContentPosition(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public build(): androidx.mediarouter.media.MediaItemStatus;
					public setPlaybackState(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public constructor(param0: androidx.mediarouter.media.MediaItemStatus);
					public setContentDuration(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteDescriptor {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor>;
				public getId(): string;
				public getExtras(): globalAndroid.os.Bundle;
				public getGroupMemberIds(): java.util.List<string>;
				public getConnectionState(): number;
				public getDescription(): string;
				public getPlaybackType(): number;
				public isConnecting(): boolean;
				public getMinClientVersion(): number;
				public getDeviceType(): number;
				public isDynamicGroupRoute(): boolean;
				public getPresentationDisplayId(): number;
				public asBundle(): globalAndroid.os.Bundle;
				public getVolumeHandling(): number;
				public getIconUri(): globalAndroid.net.Uri;
				public getVolumeMax(): number;
				public getPlaybackStream(): number;
				public getName(): string;
				public isValid(): boolean;
				public toString(): string;
				public getVolume(): number;
				public canDisconnectAndKeepPlaying(): boolean;
				public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
				public getSettingsActivity(): globalAndroid.content.IntentSender;
				public isEnabled(): boolean;
				public getMaxClientVersion(): number;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor;
			}
			export module MediaRouteDescriptor {
				export class Builder {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor.Builder>;
					public setIconUri(param0: globalAndroid.net.Uri): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public build(): androidx.mediarouter.media.MediaRouteDescriptor;
					public setConnecting(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addControlFilter(param0: globalAndroid.content.IntentFilter): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setName(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setConnectionState(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setDeviceType(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public constructor(param0: androidx.mediarouter.media.MediaRouteDescriptor);
					public constructor(param0: string, param1: string);
					public setIsDynamicGroupRoute(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addGroupMemberIds(param0: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setPlaybackStream(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolume(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setDescription(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addControlFilters(param0: java.util.Collection<globalAndroid.content.IntentFilter>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolumeMax(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setSettingsActivity(param0: globalAndroid.content.IntentSender): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolumeHandling(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addGroupMemberId(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setPlaybackType(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setEnabled(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public removeGroupMemberId(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setPresentationDisplayId(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setMinClientVersion(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setCanDisconnect(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setMaxClientVersion(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setId(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteDiscoveryRequest {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDiscoveryRequest>;
				public hashCode(): number;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
				public equals(param0: any): boolean;
				public constructor(param0: androidx.mediarouter.media.MediaRouteSelector, param1: boolean);
				public isValid(): boolean;
				public toString(): string;
				public getSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public asBundle(): globalAndroid.os.Bundle;
				public isActiveScan(): boolean;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProvider {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider>;
				public getHandler(): globalAndroid.os.Handler;
				public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public getContext(): globalAndroid.content.Context;
				public getDiscoveryRequest(): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
				public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public setDescriptor(param0: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public onCreateDynamicGroupRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
				public setCallback(param0: androidx.mediarouter.media.MediaRouteProvider.Callback): void;
				public constructor(param0: globalAndroid.content.Context);
				public getMetadata(): androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata;
				public getDescriptor(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
			}
			export module MediaRouteProvider {
				export abstract class Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.Callback>;
					public constructor();
					public onDescriptorChanged(param0: androidx.mediarouter.media.MediaRouteProvider, param1: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				}
				export abstract class DynamicGroupRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController>;
					public constructor();
					public onAddMemberRoute(param0: string): void;
					public onUpdateMemberRoutes(param0: java.util.List<string>): void;
					public onRemoveMemberRoute(param0: string): void;
					public notifyDynamicRoutesChanged(param0: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
					public getTransferableSectionTitle(): string;
					public getGroupableSelectionTitle(): string;
				}
				export module DynamicGroupRouteController {
					export class DynamicRouteDescriptor {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>;
						public static UNSELECTING: number;
						public static UNSELECTED: number;
						public static SELECTING: number;
						public static SELECTED: number;
						public getRouteDescriptor(): androidx.mediarouter.media.MediaRouteDescriptor;
						public getSelectionState(): number;
						public isTransferable(): boolean;
						public isGroupable(): boolean;
						public isUnselectable(): boolean;
					}
					export module DynamicRouteDescriptor {
						export class Builder {
							public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder>;
							public setIsGroupable(param0: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public setIsUnselectable(param0: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public constructor(param0: androidx.mediarouter.media.MediaRouteDescriptor);
							public constructor(param0: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor);
							public setIsTransferable(param0: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public build(): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor;
							public setSelectionState(param0: number): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
						}
						export class SelectionState {
							public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.SelectionState>;
							/**
							 * Constructs a new instance of the androidx.mediarouter.media.MediaRouteProvider$DynamicGroupRouteController$DynamicRouteDescriptor$SelectionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
					export class OnDynamicRoutesChangedListener {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.OnDynamicRoutesChangedListener>;
						/**
						 * Constructs a new instance of the androidx.mediarouter.media.MediaRouteProvider$DynamicGroupRouteController$OnDynamicRoutesChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRoutesChanged(param0: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController, param1: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
						});
						public constructor();
						public onRoutesChanged(param0: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController, param1: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
					}
				}
				export class ProviderHandler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export class ProviderMetadata {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata>;
					public toString(): string;
					public getComponentName(): globalAndroid.content.ComponentName;
					public getPackageName(): string;
				}
				export abstract class RouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.RouteController>;
					public onUnselect(): void;
					public onSetVolume(param0: number): void;
					public constructor();
					public onSelect(): void;
					public onUnselect(param0: number): void;
					public onControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					public onRelease(): void;
					public onUpdateVolume(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteProviderDescriptor {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor>;
				public supportsDynamicGroupRoute(): boolean;
				public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouteDescriptor>;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteProviderDescriptor;
				public isValid(): boolean;
				public toString(): string;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaRouteProviderDescriptor {
				export class Builder {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder>;
					public constructor();
					public setSupportsDynamicGroupRoute(param0: boolean): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public constructor(param0: androidx.mediarouter.media.MediaRouteProviderDescriptor);
					public addRoute(param0: androidx.mediarouter.media.MediaRouteDescriptor): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public addRoutes(param0: java.util.Collection<androidx.mediarouter.media.MediaRouteDescriptor>): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public build(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProviderProtocol {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderProtocol>;
				public static SERVICE_INTERFACE: string;
				public static CLIENT_MSG_REGISTER: number;
				public static CLIENT_MSG_UNREGISTER: number;
				public static CLIENT_MSG_CREATE_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_RELEASE_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_SELECT_ROUTE: number;
				public static CLIENT_MSG_UNSELECT_ROUTE: number;
				public static CLIENT_MSG_SET_ROUTE_VOLUME: number;
				public static CLIENT_MSG_UPDATE_ROUTE_VOLUME: number;
				public static CLIENT_MSG_ROUTE_CONTROL_REQUEST: number;
				public static CLIENT_MSG_SET_DISCOVERY_REQUEST: number;
				public static CLIENT_MSG_CREATE_DYNAMIC_GROUP_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_ADD_MEMBER_ROUTE: number;
				public static CLIENT_MSG_REMOVE_MEMBER_ROUTE: number;
				public static CLIENT_MSG_UPDATE_MEMBER_ROUTES: number;
				public static CLIENT_DATA_ROUTE_ID: string;
				public static CLIENT_DATA_ROUTE_LIBRARY_GROUP: string;
				public static CLIENT_DATA_VOLUME: string;
				public static CLIENT_DATA_UNSELECT_REASON: string;
				public static CLIENT_DATA_MEMBER_ROUTE_IDS: string;
				public static CLIENT_DATA_MEMBER_ROUTE_ID: string;
				public static DATA_KEY_GROUPABLE_SECION_TITLE: string;
				public static DATA_KEY_TRANSFERABLE_SECTION_TITLE: string;
				public static DATA_KEY_DYNAMIC_ROUTE_DESCRIPTORS: string;
				public static SERVICE_MSG_GENERIC_FAILURE: number;
				public static SERVICE_MSG_GENERIC_SUCCESS: number;
				public static SERVICE_MSG_REGISTERED: number;
				public static SERVICE_MSG_CONTROL_REQUEST_SUCCEEDED: number;
				public static SERVICE_MSG_CONTROL_REQUEST_FAILED: number;
				public static SERVICE_MSG_DESCRIPTOR_CHANGED: number;
				public static SERVICE_MSG_DYNAMIC_ROUTE_CREATED: number;
				public static SERVICE_MSG_DYNAMIC_ROUTE_DESCRIPTORS_CHANGED: number;
				public static SERVICE_DATA_ERROR: string;
				public static CLIENT_VERSION_1: number;
				public static CLIENT_VERSION_2: number;
				public static CLIENT_VERSION_3: number;
				public static CLIENT_VERSION_CURRENT: number;
				public static SERVICE_VERSION_1: number;
				public static SERVICE_VERSION_2: number;
				public static SERVICE_VERSION_CURRENT: number;
				public static isValidRemoteMessenger(param0: globalAndroid.os.Messenger): boolean;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProviderService {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService>;
				public static SERVICE_INTERFACE: string;
				public getMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
				public onUnbind(param0: globalAndroid.content.Intent): boolean;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onCreateMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
				public constructor();
			}
			export module MediaRouteProviderService {
				export class ClientRecord {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ClientRecord>;
					public mMessenger: globalAndroid.os.Messenger;
					public mVersion: number;
					public mDiscoveryRequest: androidx.mediarouter.media.MediaRouteDiscoveryRequest;
					public hasMessenger(param0: globalAndroid.os.Messenger): boolean;
					public binderDied(): void;
					public toString(): string;
					public createRouteController(param0: string, param1: string, param2: number): boolean;
					public dispose(): void;
					public register(): boolean;
					public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
					public constructor(param0: androidx.mediarouter.media.MediaRouteProviderService, param1: globalAndroid.os.Messenger, param2: number);
					public releaseRouteController(param0: number): boolean;
					public getRouteController(param0: number): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public createDynamicGroupRouteController(param0: string, param1: number): globalAndroid.os.Bundle;
				}
				export class PrivateHandler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.PrivateHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export class ProviderCallback extends androidx.mediarouter.media.MediaRouteProvider.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ProviderCallback>;
					public onDescriptorChanged(param0: androidx.mediarouter.media.MediaRouteProvider, param1: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				}
				export class ReceiveHandler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ReceiveHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
					public constructor(param0: androidx.mediarouter.media.MediaRouteProviderService);
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteSelector {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector>;
				public static EMPTY: androidx.mediarouter.media.MediaRouteSelector;
				public contains(param0: androidx.mediarouter.media.MediaRouteSelector): boolean;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteSelector;
				public hashCode(): number;
				public hasControlCategory(param0: string): boolean;
				public equals(param0: any): boolean;
				public matchesControlFilters(param0: java.util.List<globalAndroid.content.IntentFilter>): boolean;
				public isEmpty(): boolean;
				public isValid(): boolean;
				public toString(): string;
				public getControlCategories(): java.util.List<string>;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaRouteSelector {
				export class Builder {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector.Builder>;
					public addControlCategory(param0: string): androidx.mediarouter.media.MediaRouteSelector.Builder;
					public constructor();
					public constructor(param0: androidx.mediarouter.media.MediaRouteSelector);
					public addSelector(param0: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouteSelector.Builder;
					public build(): androidx.mediarouter.media.MediaRouteSelector;
					public addControlCategories(param0: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteSelector.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouter {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter>;
				public static UNSELECT_REASON_UNKNOWN: number;
				public static UNSELECT_REASON_DISCONNECTED: number;
				public static UNSELECT_REASON_STOPPED: number;
				public static UNSELECT_REASON_ROUTE_CHANGED: number;
				public static CALLBACK_FLAG_PERFORM_ACTIVE_SCAN: number;
				public static CALLBACK_FLAG_UNFILTERED_EVENTS: number;
				public static CALLBACK_FLAG_REQUEST_DISCOVERY: number;
				public static CALLBACK_FLAG_FORCE_DISCOVERY: number;
				public static AVAILABILITY_FLAG_IGNORE_DEFAULT_ROUTE: number;
				public static AVAILABILITY_FLAG_REQUIRE_MATCH: number;
				public getDefaultRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public selectRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public addMemberToDynamicGroup(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public removeRemoteControlClient(param0: any): void;
				public getBluetoothRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public unselect(param0: number): void;
				public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
				public addRemoteControlClient(param0: any): void;
				public getSelectedRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
				public updateSelectedRoute(param0: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public addCallback(param0: androidx.mediarouter.media.MediaRouteSelector, param1: androidx.mediarouter.media.MediaRouter.Callback): void;
				public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
				public removeMemberFromDynamicGroup(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public static getInstance(param0: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
				public addCallback(param0: androidx.mediarouter.media.MediaRouteSelector, param1: androidx.mediarouter.media.MediaRouter.Callback, param2: number): void;
				public getProviders(): java.util.List<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
				public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
				public removeCallback(param0: androidx.mediarouter.media.MediaRouter.Callback): void;
				public setMediaSession(param0: any): void;
				public isRouteAvailable(param0: androidx.mediarouter.media.MediaRouteSelector, param1: number): boolean;
			}
			export module MediaRouter {
				export abstract class Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.Callback>;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteVolumeChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
					public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public constructor();
					public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRoutePresentationDisplayChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class CallbackRecord {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.CallbackRecord>;
					public mRouter: androidx.mediarouter.media.MediaRouter;
					public mCallback: androidx.mediarouter.media.MediaRouter.Callback;
					public mSelector: androidx.mediarouter.media.MediaRouteSelector;
					public mFlags: number;
					public filterRouteEvent(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
					public constructor(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.Callback);
				}
				export abstract class ControlRequestCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ControlRequestCallback>;
					public constructor();
					public onResult(param0: globalAndroid.os.Bundle): void;
					public onError(param0: string, param1: globalAndroid.os.Bundle): void;
				}
				export class GlobalMediaRouter implements androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback, androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter>;
					public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
					public getProviderContext(param0: string): globalAndroid.content.Context;
					public getDisplay(param0: number): globalAndroid.view.Display;
					public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
					public start(): void;
					public setMediaSession(param0: any): void;
					public requestSetVolume(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: number): void;
					public removeRemoteControlClient(param0: any): void;
					public sendControlRequest(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: globalAndroid.content.Intent, param2: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): void;
					public onSystemRouteSelectedByDescriptorId(param0: string): void;
					public requestUpdateVolume(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: number): void;
					public updateDiscoveryRequest(): void;
					public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
					public getRouter(param0: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
					public getContentResolver(): globalAndroid.content.ContentResolver;
					public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
					public getRoute(param0: string): androidx.mediarouter.media.MediaRouter.RouteInfo;
					public addRemoteControlClient(param0: any): void;
					public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public isRouteAvailable(param0: androidx.mediarouter.media.MediaRouteSelector, param1: number): boolean;
				}
				export module GlobalMediaRouter {
					export class CallbackHandler {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.CallbackHandler>;
						public static MSG_ROUTE_ADDED: number;
						public static MSG_ROUTE_REMOVED: number;
						public static MSG_ROUTE_CHANGED: number;
						public static MSG_ROUTE_VOLUME_CHANGED: number;
						public static MSG_ROUTE_PRESENTATION_DISPLAY_CHANGED: number;
						public static MSG_ROUTE_SELECTED: number;
						public static MSG_ROUTE_UNSELECTED: number;
						public static MSG_PROVIDER_ADDED: number;
						public static MSG_PROVIDER_REMOVED: number;
						public static MSG_PROVIDER_CHANGED: number;
						public post(param0: number, param1: any): void;
						public post(param0: number, param1: any, param2: number): void;
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
					export class MediaSessionRecord {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.MediaSessionRecord>;
						public getToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
						public clearVolumeHandling(): void;
						public configureVolume(param0: number, param1: number, param2: number): void;
					}
					export class ProviderCallback extends androidx.mediarouter.media.MediaRouteProvider.Callback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.ProviderCallback>;
						public onDescriptorChanged(param0: androidx.mediarouter.media.MediaRouteProvider, param1: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
					}
					export class RemoteControlClientRecord extends androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.RemoteControlClientRecord>;
						public disconnect(): void;
						public getRemoteControlClient(): any;
						public updatePlaybackInfo(): void;
						public onVolumeSetRequest(param0: number): void;
						public onVolumeUpdateRequest(param0: number): void;
						public constructor(param0: androidx.mediarouter.media.MediaRouter.GlobalMediaRouter, param1: any);
					}
				}
				export class ProviderInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
					public toString(): string;
					public getComponentName(): globalAndroid.content.ComponentName;
					public getPackageName(): string;
					public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
					public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
				}
				export class RouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public static CONNECTION_STATE_DISCONNECTED: number;
					public static CONNECTION_STATE_CONNECTING: number;
					public static CONNECTION_STATE_CONNECTED: number;
					public static PLAYBACK_TYPE_LOCAL: number;
					public static PLAYBACK_TYPE_REMOTE: number;
					public static DEVICE_TYPE_UNKNOWN: number;
					public static DEVICE_TYPE_TV: number;
					public static DEVICE_TYPE_SPEAKER: number;
					public static DEVICE_TYPE_BLUETOOTH: number;
					public static PLAYBACK_VOLUME_FIXED: number;
					public static PLAYBACK_VOLUME_VARIABLE: number;
					public static PRESENTATION_DISPLAY_ID_NONE: number;
					public isDeviceSpeaker(): boolean;
					public getId(): string;
					public getPresentationDisplay(): globalAndroid.view.Display;
					public getVolumeHandling(): number;
					public isDefaultOrBluetooth(): boolean;
					public getVolume(): number;
					public isDefault(): boolean;
					public getDeviceType(): number;
					public getVolumeMax(): number;
					public matchesSelector(param0: androidx.mediarouter.media.MediaRouteSelector): boolean;
					public getConnectionState(): number;
					public toString(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public getProvider(): androidx.mediarouter.media.MediaRouter.ProviderInfo;
					public getMemberRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public isEnabled(): boolean;
					public sendControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): void;
					public isGroup(): boolean;
					public requestUpdateVolume(param0: number): void;
					public getSettingsIntent(): globalAndroid.content.IntentSender;
					public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
					public supportsControlCategory(param0: string): boolean;
					public getIconUri(): globalAndroid.net.Uri;
					public getPlaybackStream(): number;
					public canDisconnect(): boolean;
					public select(): void;
					public getPlaybackType(): number;
					public getDynamicGroupController(): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
					public supportsControlRequest(param0: globalAndroid.content.Intent): boolean;
					public isBluetooth(): boolean;
					public getName(): string;
					public getPresentationDisplayId(): number;
					public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
					public requestSetVolume(param0: number): void;
					public getDynamicGroupState(): androidx.mediarouter.media.MediaRouter.RouteInfo.DynamicGroupState;
					public getDescription(): string;
					public isConnecting(): boolean;
					public supportsControlAction(param0: string, param1: string): boolean;
					public isSelected(): boolean;
				}
				export module RouteInfo {
					export class DynamicGroupState {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteInfo.DynamicGroupState>;
						public constructor(param0: androidx.mediarouter.media.MediaRouter.RouteInfo);
						public getSelectionState(): number;
						public isTransferable(): boolean;
						public isGroupable(): boolean;
						public isUnselectable(): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterApi24 {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24>;
			}
			export module MediaRouterApi24 {
				export class RouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24.RouteInfo>;
					public static getDeviceType(param0: any): number;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybean {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean>;
				public static DEVICE_OUT_BLUETOOTH: number;
				public static ROUTE_TYPE_LIVE_AUDIO: number;
				public static ROUTE_TYPE_LIVE_VIDEO: number;
				public static ROUTE_TYPE_USER: number;
				public static ALL_ROUTE_TYPES: number;
				public static createRouteCategory(param0: any, param1: string, param2: boolean): any;
				public static getSelectedRoute(param0: any, param1: number): any;
				public static addCallback(param0: any, param1: number, param2: any): void;
				public static selectRoute(param0: any, param1: number, param2: any): void;
				public static createCallback(param0: androidx.mediarouter.media.MediaRouterJellybean.Callback): any;
				public static createVolumeCallback(param0: androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback): any;
				public static createUserRoute(param0: any, param1: any): any;
				public static getMediaRouter(param0: globalAndroid.content.Context): any;
				public static removeCallback(param0: any, param1: any): void;
				public static getRoutes(param0: any): java.util.List;
				public static getCategories(param0: any): java.util.List;
				public static addUserRoute(param0: any, param1: any): void;
				public static removeUserRoute(param0: any, param1: any): void;
			}
			export module MediaRouterJellybean {
				export class Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRouteSelected(param0: number, param1: any): void;
						onRouteUnselected(param0: number, param1: any): void;
						onRouteAdded(param0: any): void;
						onRouteRemoved(param0: any): void;
						onRouteChanged(param0: any): void;
						onRouteGrouped(param0: any, param1: any, param2: number): void;
						onRouteUngrouped(param0: any, param1: any): void;
						onRouteVolumeChanged(param0: any): void;
					});
					public constructor();
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onRouteAdded(param0: any): void;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onRouteUnselected(param0: number, param1: any): void;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
				}
				export class CallbackProxy<T>  extends globalAndroid.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any>>;
					public mCallback: any;
					public onRouteUnselected(param0: globalAndroid.media.MediaRouter, param1: number, param2: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public constructor(param0: any);
					public onRouteGrouped(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo, param2: globalAndroid.media.MediaRouter.RouteGroup, param3: number): void;
					public onRouteChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(param0: globalAndroid.media.MediaRouter, param1: number, param2: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteVolumeChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteUngrouped(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo, param2: globalAndroid.media.MediaRouter.RouteGroup): void;
				}
				export class GetDefaultRouteWorkaround {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.GetDefaultRouteWorkaround>;
					public constructor();
					public getDefaultRoute(param0: any): any;
				}
				export class RouteCategory {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteCategory>;
					public static isGroupable(param0: any): boolean;
					public static getName(param0: any, param1: globalAndroid.content.Context): string;
					public static getRoutes(param0: any): java.util.List;
					public static getSupportedTypes(param0: any): number;
				}
				export class RouteGroup {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteGroup>;
					public static getGroupedRoutes(param0: any): java.util.List;
				}
				export class RouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteInfo>;
					public static requestSetVolume(param0: any, param1: number): void;
					public static getPlaybackStream(param0: any): number;
					public static requestUpdateVolume(param0: any, param1: number): void;
					public static getStatus(param0: any): string;
					public static getName(param0: any, param1: globalAndroid.content.Context): string;
					public static setTag(param0: any, param1: any): void;
					public static getVolumeHandling(param0: any): number;
					public static getTag(param0: any): any;
					public static getIconDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
					public static getVolume(param0: any): number;
					public static getVolumeMax(param0: any): number;
					public static getPlaybackType(param0: any): number;
					public static getSupportedTypes(param0: any): number;
					public static getGroup(param0: any): any;
					public static isGroup(param0: any): boolean;
					public static getCategory(param0: any): any;
				}
				export class SelectRouteWorkaround {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.SelectRouteWorkaround>;
					public constructor();
					public selectRoute(param0: any, param1: number, param2: any): void;
				}
				export class UserRouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.UserRouteInfo>;
					public static setName(param0: any, param1: string): void;
					public static setVolumeHandling(param0: any, param1: number): void;
					public static setIconDrawable(param0: any, param1: globalAndroid.graphics.drawable.Drawable): void;
					public static setVolumeCallback(param0: any, param1: any): void;
					public static setVolume(param0: any, param1: number): void;
					public static setPlaybackType(param0: any, param1: number): void;
					public static setVolumeMax(param0: any, param1: number): void;
					public static setRemoteControlClient(param0: any, param1: any): void;
					public static setPlaybackStream(param0: any, param1: number): void;
					public static setStatus(param0: any, param1: string): void;
				}
				export class VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean$VolumeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVolumeSetRequest(param0: any, param1: number): void;
						onVolumeUpdateRequest(param0: any, param1: number): void;
					});
					public constructor();
					public onVolumeUpdateRequest(param0: any, param1: number): void;
					public onVolumeSetRequest(param0: any, param1: number): void;
				}
				export class VolumeCallbackProxy<T>  extends globalAndroid.media.MediaRouter.VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallbackProxy<any>>;
					public mCallback: any;
					public onVolumeSetRequest(param0: globalAndroid.media.MediaRouter.RouteInfo, param1: number): void;
					public onVolumeUpdateRequest(param0: globalAndroid.media.MediaRouter.RouteInfo, param1: number): void;
					public constructor(param0: any);
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybeanMr1 {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1>;
				public static createCallback(param0: androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback): any;
			}
			export module MediaRouterJellybeanMr1 {
				export class ActiveScanWorkaround {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.ActiveScanWorkaround>;
					public run(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler);
					public setActiveScanRouteTypes(param0: number): void;
				}
				export class Callback extends androidx.mediarouter.media.MediaRouterJellybean.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybeanMr1$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRoutePresentationDisplayChanged(param0: any): void;
						onRouteSelected(param0: number, param1: any): void;
						onRouteUnselected(param0: number, param1: any): void;
						onRouteAdded(param0: any): void;
						onRouteRemoved(param0: any): void;
						onRouteChanged(param0: any): void;
						onRouteGrouped(param0: any, param1: any, param2: number): void;
						onRouteUngrouped(param0: any, param1: any): void;
						onRouteVolumeChanged(param0: any): void;
					});
					public constructor();
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onRouteAdded(param0: any): void;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onRouteUnselected(param0: number, param1: any): void;
					public onRoutePresentationDisplayChanged(param0: any): void;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
				}
				export class CallbackProxy<T>  extends androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any> {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.CallbackProxy<any>>;
					public onRoutePresentationDisplayChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public constructor(param0: any);
				}
				export class IsConnectingWorkaround {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.IsConnectingWorkaround>;
					public isConnecting(param0: any): boolean;
					public constructor();
				}
				export class RouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.RouteInfo>;
					public static getPresentationDisplay(param0: any): globalAndroid.view.Display;
					public static isEnabled(param0: any): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybeanMr2 {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2>;
				public static getDefaultRoute(param0: any): any;
				public static addCallback(param0: any, param1: number, param2: any, param3: number): void;
			}
			export module MediaRouterJellybeanMr2 {
				export class RouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.RouteInfo>;
					public static isConnecting(param0: any): boolean;
					public static getDescription(param0: any): string;
				}
				export class UserRouteInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.UserRouteInfo>;
					public static setDescription(param0: any, param1: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaSessionStatus {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus>;
				public static SESSION_STATE_ACTIVE: number;
				public static SESSION_STATE_ENDED: number;
				public static SESSION_STATE_INVALIDATED: number;
				public getSessionState(): number;
				public getExtras(): globalAndroid.os.Bundle;
				public toString(): string;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus;
				public getTimestamp(): number;
				public asBundle(): globalAndroid.os.Bundle;
				public isQueuePaused(): boolean;
			}
			export module MediaSessionStatus {
				export class Builder {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus.Builder>;
					public setQueuePaused(param0: boolean): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public build(): androidx.mediarouter.media.MediaSessionStatus;
					public setTimestamp(param0: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public setSessionState(param0: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public constructor(param0: androidx.mediarouter.media.MediaSessionStatus);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RegisteredMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider {
				public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider>;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName);
				public toString(): string;
				public rebindIfDisconnected(): void;
				public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
				public stop(): void;
				public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public onCreateDynamicGroupRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
				public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public hasComponentName(param0: string, param1: string): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public start(): void;
			}
			export module RegisteredMediaRouteProvider {
				export class Connection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection>;
					public onDescriptorChanged(param0: globalAndroid.os.Bundle): boolean;
					public onDynamicGroupRouteControllerCreated(param0: number, param1: globalAndroid.os.Bundle): void;
					public releaseRouteController(param0: number): void;
					public updateMemberRoutes(param0: number, param1: java.util.List<string>): void;
					public dispose(): void;
					public onGenericSuccess(param0: number): boolean;
					public onDynamicRouteDescriptorsChanged(param0: number, param1: globalAndroid.os.Bundle): boolean;
					public onControlRequestSucceeded(param0: number, param1: globalAndroid.os.Bundle): boolean;
					public selectRoute(param0: number): void;
					public onRegistered(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
					public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider, param1: globalAndroid.os.Messenger);
					public binderDied(): void;
					public createRouteController(param0: string, param1: string): number;
					public addMemberRoute(param0: number, param1: string): void;
					public updateVolume(param0: number, param1: number): void;
					public onControlRequestFailed(param0: number, param1: string, param2: globalAndroid.os.Bundle): boolean;
					public sendControlRequest(param0: number, param1: globalAndroid.content.Intent, param2: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					public unselectRoute(param0: number, param1: number): void;
					public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
					public register(): boolean;
					public createDynamicGroupRouteController(param0: string, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): number;
					public removeMemberRoute(param0: number, param1: string): void;
					public onGenericFailure(param0: number): boolean;
					public setVolume(param0: number, param1: number): void;
				}
				export class ControllerConnection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProvider$ControllerConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getControllerId(): number;
						attachConnection(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
						detachConnection(): void;
					});
					public constructor();
					public attachConnection(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
					public detachConnection(): void;
					public getControllerId(): number;
				}
				export class PrivateHandler {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.PrivateHandler>;
				}
				export class ReceiveHandler {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ReceiveHandler>;
					public dispose(): void;
					public handleMessage(param0: globalAndroid.os.Message): void;
					public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection);
				}
				export class RegisteredDynamicController extends androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController implements androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.RegisteredDynamicController>;
					public attachConnection(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
					public onSetVolume(param0: number): void;
					public onSelect(): void;
					public onUnselect(param0: number): void;
					public onAddMemberRoute(param0: string): void;
					public onControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					public onUpdateMemberRoutes(param0: java.util.List<string>): void;
					public detachConnection(): void;
					public onRemoveMemberRoute(param0: string): void;
					public getTransferableSectionTitle(): string;
					public getGroupableSelectionTitle(): string;
					public onUnselect(): void;
					public onRelease(): void;
					public getControllerId(): number;
					public onUpdateVolume(param0: number): void;
				}
				export class RegisteredRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController implements androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.RegisteredRouteController>;
					public onUnselect(): void;
					public attachConnection(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
					public onSetVolume(param0: number): void;
					public onSelect(): void;
					public onUnselect(param0: number): void;
					public onControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					public onRelease(): void;
					public detachConnection(): void;
					public getControllerId(): number;
					public onUpdateVolume(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RegisteredMediaRouteProviderWatcher {
				public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher>;
				public stop(): void;
				public start(): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback);
			}
			export module RegisteredMediaRouteProviderWatcher {
				export class Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
						removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
					});
					public constructor();
					public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
					public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class RemoteControlClientCompat {
				public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat>;
				public mContext: globalAndroid.content.Context;
				public mRcc: any;
				public mVolumeCallback: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback;
				public setPlaybackInfo(param0: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
				public getRemoteControlClient(): any;
				public constructor(param0: globalAndroid.content.Context, param1: any);
				public static obtain(param0: globalAndroid.content.Context, param1: any): androidx.mediarouter.media.RemoteControlClientCompat;
				public setVolumeCallback(param0: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback): void;
			}
			export module RemoteControlClientCompat {
				export class JellybeanImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl>;
					public constructor(param0: globalAndroid.content.Context, param1: any);
					public setPlaybackInfo(param0: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
				}
				export module JellybeanImpl {
					export class VolumeCallbackWrapper extends androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
						public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl.VolumeCallbackWrapper>;
						public onVolumeSetRequest(param0: any, param1: number): void;
						public constructor(param0: androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl);
						public onVolumeUpdateRequest(param0: any, param1: number): void;
					}
				}
				export class LegacyImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.LegacyImpl>;
					public constructor(param0: globalAndroid.content.Context, param1: any);
				}
				export class PlaybackInfo {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo>;
					public volume: number;
					public volumeMax: number;
					public volumeHandling: number;
					public playbackStream: number;
					public playbackType: number;
					public constructor();
				}
				export class VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RemoteControlClientCompat$VolumeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVolumeUpdateRequest(param0: number): void;
						onVolumeSetRequest(param0: number): void;
					});
					public constructor();
					public onVolumeUpdateRequest(param0: number): void;
					public onVolumeSetRequest(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RemotePlaybackClient {
				public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient>;
				public release(): void;
				public setOnMessageReceivedListener(param0: androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener): void;
				public setStatusCallback(param0: androidx.mediarouter.media.RemotePlaybackClient.StatusCallback): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.MediaRouter.RouteInfo);
				public isRemotePlaybackSupported(): boolean;
				public getStatus(param0: string, param1: globalAndroid.os.Bundle, param2: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public isQueuingSupported(): boolean;
				public play(param0: globalAndroid.net.Uri, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: globalAndroid.os.Bundle, param5: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public startSession(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public resume(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public seek(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public getSessionStatus(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public stop(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public sendMessage(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public enqueue(param0: globalAndroid.net.Uri, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: globalAndroid.os.Bundle, param5: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public pause(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public isSessionManagementSupported(): boolean;
				public endSession(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public setSessionId(param0: string): void;
				public isMessagingSupported(): boolean;
				public remove(param0: string, param1: globalAndroid.os.Bundle, param2: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public hasSession(): boolean;
				public getSessionId(): string;
			}
			export module RemotePlaybackClient {
				export abstract class ActionCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionCallback>;
					public constructor();
					public onError(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				}
				export class ActionReceiver {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionReceiver>;
					public static ACTION_ITEM_STATUS_CHANGED: string;
					public static ACTION_SESSION_STATUS_CHANGED: string;
					public static ACTION_MESSAGE_RECEIVED: string;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				export abstract class ItemActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback>;
					public constructor();
					public onResult(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus, param3: string, param4: androidx.mediarouter.media.MediaItemStatus): void;
				}
				export class OnMessageReceivedListener {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RemotePlaybackClient$OnMessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMessageReceived(param0: string, param1: globalAndroid.os.Bundle): void;
					});
					public constructor();
					public onMessageReceived(param0: string, param1: globalAndroid.os.Bundle): void;
				}
				export abstract class SessionActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback>;
					public constructor();
					public onResult(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus): void;
				}
				export abstract class StatusCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.StatusCallback>;
					public onSessionChanged(param0: string): void;
					public constructor();
					public onItemStatusChanged(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus, param3: string, param4: androidx.mediarouter.media.MediaItemStatus): void;
					public onSessionStatusChanged(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class SystemMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider {
				public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider>;
				public static PACKAGE_NAME: string;
				public static DEFAULT_ROUTE_ID: string;
				public onSyncRouteAdded(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public getSystemRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
				public onSyncRouteRemoved(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public constructor(param0: globalAndroid.content.Context);
				public getDefaultRoute(): any;
				public onSyncRouteSelected(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public static obtain(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback): androidx.mediarouter.media.SystemMediaRouteProvider;
				public onSyncRouteChanged(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
			}
			export module SystemMediaRouteProvider {
				export class Api24Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.Api24Impl>;
					public onVolumeUpdateRequest(param0: any, param1: number): void;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onVolumeSetRequest(param0: any, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onBuildSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
					public constructor(param0: globalAndroid.content.Context);
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public onRouteAdded(param0: any): void;
					public onRouteUnselected(param0: number, param1: any): void;
					public onRoutePresentationDisplayChanged(param0: any): void;
				}
				export class JellybeanImpl extends androidx.mediarouter.media.SystemMediaRouteProvider implements androidx.mediarouter.media.MediaRouterJellybean.Callback, androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl>;
					public mRouterObj: any;
					public mCallbackObj: any;
					public mVolumeCallbackObj: any;
					public mUserRouteCategoryObj: any;
					public mRouteTypes: number;
					public mActiveScan: boolean;
					public mCallbackRegistered: boolean;
					public mSystemRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
					public mUserRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
					public getRouteName(param0: any): string;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
					public getUserRouteRecord(param0: any): androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public findSystemRouteRecord(param0: any): number;
					public onRouteAdded(param0: any): void;
					public createCallbackObj(): any;
					public publishRoutes(): void;
					public updateUserRouteProperties(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
					public findSystemRouteRecordByDescriptorId(param0: string): number;
					public onSyncRouteSelected(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onVolumeUpdateRequest(param0: any, param1: number): void;
					public onVolumeSetRequest(param0: any, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public getSystemRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
					public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public onBuildSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public updateCallback(): void;
					public updateSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): void;
					public constructor(param0: globalAndroid.content.Context);
					public getDefaultRoute(): any;
					public selectRoute(param0: any): void;
					public onRouteUnselected(param0: number, param1: any): void;
					public onSyncRouteChanged(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onSyncRouteRemoved(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public findUserRouteRecord(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
					public onSyncRouteAdded(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public createVolumeCallbackObj(): any;
					public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				}
				export module JellybeanImpl {
					export class SystemRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteController>;
						public onSetVolume(param0: number): void;
						public constructor();
						public constructor(param0: any);
						public onUpdateVolume(param0: number): void;
					}
					export class SystemRouteRecord {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
						public mRouteObj: any;
						public mRouteDescriptorId: string;
						public mRouteDescriptor: androidx.mediarouter.media.MediaRouteDescriptor;
						public constructor(param0: any, param1: string);
					}
					export class UserRouteRecord {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
						public mRoute: androidx.mediarouter.media.MediaRouter.RouteInfo;
						public mRouteObj: any;
						public constructor(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: any);
					}
				}
				export class JellybeanMr1Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl implements androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl>;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onVolumeUpdateRequest(param0: any, param1: number): void;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onVolumeSetRequest(param0: any, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onBuildSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public updateCallback(): void;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
					public constructor(param0: globalAndroid.content.Context);
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public onRouteAdded(param0: any): void;
					public createCallbackObj(): any;
					public isConnecting(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
					public onRouteUnselected(param0: number, param1: any): void;
					public onRoutePresentationDisplayChanged(param0: any): void;
				}
				export class JellybeanMr2Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl>;
					public onVolumeUpdateRequest(param0: any, param1: number): void;
					public onRouteUngrouped(param0: any, param1: any): void;
					public onRouteGrouped(param0: any, param1: any, param2: number): void;
					public onVolumeSetRequest(param0: any, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onBuildSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public updateCallback(): void;
					public onRouteSelected(param0: number, param1: any): void;
					public onRouteChanged(param0: any): void;
					public constructor(param0: globalAndroid.content.Context);
					public onRouteRemoved(param0: any): void;
					public onRouteVolumeChanged(param0: any): void;
					public getDefaultRoute(): any;
					public selectRoute(param0: any): void;
					public onRouteAdded(param0: any): void;
					public isConnecting(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
					public onRouteUnselected(param0: number, param1: any): void;
					public onRoutePresentationDisplayChanged(param0: any): void;
					public updateUserRouteProperties(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
				}
				export class LegacyImpl extends androidx.mediarouter.media.SystemMediaRouteProvider {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl>;
					public constructor(param0: globalAndroid.content.Context);
					public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				}
				export module LegacyImpl {
					export class DefaultRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.DefaultRouteController>;
						public onSetVolume(param0: number): void;
						public onUpdateVolume(param0: number): void;
					}
					export class VolumeChangeReceiver {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.VolumeChangeReceiver>;
						public static VOLUME_CHANGED_ACTION: string;
						public static EXTRA_VOLUME_STREAM_TYPE: string;
						public static EXTRA_VOLUME_STREAM_VALUE: string;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
				export class SyncCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.SystemMediaRouteProvider$SyncCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSystemRouteSelectedByDescriptorId(param0: string): void;
					});
					public constructor();
					public onSystemRouteSelectedByDescriptorId(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class AdBreakClipInfo {
						public static class: java.lang.Class<com.google.android.gms.cast.AdBreakClipInfo>;
						public static AD_BREAK_CLIP_NOT_SKIPPABLE: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakClipInfo>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTitle(): string;
						public getClickThroughUrl(): string;
						public toJson(): org.json.JSONObject;
						public getVastAdsRequest(): com.google.android.gms.cast.VastAdsRequest;
						public getMimeType(): string;
						public getWhenSkippableInMs(): number;
						public getContentUrl(): string;
						public getHlsSegmentFormat(): string;
						public getId(): string;
						public getCustomData(): org.json.JSONObject;
						public getDurationInMs(): number;
						public getContentId(): string;
						public getImageUrl(): string;
					}
					export module AdBreakClipInfo {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.AdBreakClipInfo.Builder>;
							public setContentId(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setImageUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setVastAdsRequest(param0: com.google.android.gms.cast.VastAdsRequest): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setDurationInMs(param0: number): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setHlsSegmentFormat(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setTitle(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setMimeType(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setWhenSkippableInMs(param0: number): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public constructor(param0: string);
							public build(): com.google.android.gms.cast.AdBreakClipInfo;
							public setContentUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setClickThroughUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
							public setCustomDataJsonString(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class AdBreakInfo {
						public static class: java.lang.Class<com.google.android.gms.cast.AdBreakInfo>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakInfo>;
						public toJson(): org.json.JSONObject;
						public constructor(param0: number, param1: string, param2: number, param3: boolean, param4: native.Array<string>, param5: boolean);
						public getPlaybackPositionInMs(): number;
						public isEmbedded(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getBreakClipIds(): native.Array<string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public getDurationInMs(): number;
						public isWatched(): boolean;
					}
					export module AdBreakInfo {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.AdBreakInfo.Builder>;
							public setIsEmbedded(param0: boolean): com.google.android.gms.cast.AdBreakInfo.Builder;
							public setBreakClipIds(param0: native.Array<string>): com.google.android.gms.cast.AdBreakInfo.Builder;
							public build(): com.google.android.gms.cast.AdBreakInfo;
							public setDurationInMs(param0: number): com.google.android.gms.cast.AdBreakInfo.Builder;
							public setIsWatched(param0: boolean): com.google.android.gms.cast.AdBreakInfo.Builder;
							public setId(param0: string): com.google.android.gms.cast.AdBreakInfo.Builder;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class AdBreakStatus {
						public static class: java.lang.Class<com.google.android.gms.cast.AdBreakStatus>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakStatus>;
						public static AD_BREAK_CLIP_NOT_SKIPPABLE: number;
						public getBreakClipId(): string;
						public getBreakId(): string;
						public getWhenSkippableInMs(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCurrentBreakTimeInMs(): number;
						public getCurrentBreakClipTimeInMs(): number;
					}
					export module AdBreakStatus {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.AdBreakStatus.Builder>;
							public constructor();
							public setCurrentBreakClipTimeInMs(param0: number): com.google.android.gms.cast.AdBreakStatus.Builder;
							public setCurrentBreakTimeInMs(param0: number): com.google.android.gms.cast.AdBreakStatus.Builder;
							public setWhenSkippableInMs(param0: number): com.google.android.gms.cast.AdBreakStatus.Builder;
							public build(): com.google.android.gms.cast.AdBreakStatus;
							public setBreakId(param0: string): com.google.android.gms.cast.AdBreakStatus.Builder;
							public setBreakClipId(param0: string): com.google.android.gms.cast.AdBreakStatus.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class ApplicationMetadata {
						public static class: java.lang.Class<com.google.android.gms.cast.ApplicationMetadata>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.ApplicationMetadata>;
						public getSupportedNamespaces(): java.util.List<string>;
						public getApplicationId(): string;
						public isNamespaceSupported(param0: string): boolean;
						public areNamespacesSupported(param0: java.util.List<string>): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSenderAppIdentifier(): string;
						public getImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class Cast {
						public static class: java.lang.Class<com.google.android.gms.cast.Cast>;
						public static MAX_MESSAGE_LENGTH: number;
						public static MAX_NAMESPACE_LENGTH: number;
						public static ACTIVE_INPUT_STATE_UNKNOWN: number;
						public static ACTIVE_INPUT_STATE_NO: number;
						public static ACTIVE_INPUT_STATE_YES: number;
						public static STANDBY_STATE_UNKNOWN: number;
						public static STANDBY_STATE_NO: number;
						public static STANDBY_STATE_YES: number;
						public static EXTRA_APP_NO_LONGER_RUNNING: string;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.cast.Cast.CastOptions>;
						public static CastApi: com.google.android.gms.cast.Cast.CastApi;
					}
					export module Cast {
						export class ApplicationConnectionResult {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.Cast$ApplicationConnectionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
								getApplicationStatus(): string;
								getSessionId(): string;
								getWasLaunched(): boolean;
							});
							public constructor();
							public getSessionId(): string;
							public getApplicationStatus(): string;
							public getWasLaunched(): boolean;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						}
						export class CastApi {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.Cast$CastApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
								sendMessage(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								leaveApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
								getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
								setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
								isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
								getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
								getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
								getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
								getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
								setMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
								removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
							});
							public constructor();
							public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
							public isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
							public stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
							public setMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
							public getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
							public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
							public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
							public leaveApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
							public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
							public getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
							public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							public sendMessage(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
						}
						export module CastApi {
							export class zza extends com.google.android.gms.cast.Cast.CastApi {
								public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastApi.zza>;
								public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
								public sendMessage(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
								public leaveApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public joinApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
								public constructor();
								public stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
								public launchApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								public getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
								public setMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
								public getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
								public getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
								public stopApplication(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
								public requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
								public getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
							}
						}
						export class CastOptions {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastOptions>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public static builder(param0: com.google.android.gms.cast.CastDevice, param1: com.google.android.gms.cast.Cast.Listener): com.google.android.gms.cast.Cast.CastOptions.Builder;
						}
						export module CastOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastOptions.Builder>;
								public build(): com.google.android.gms.cast.Cast.CastOptions;
								public setVerboseLoggingEnabled(param0: boolean): com.google.android.gms.cast.Cast.CastOptions.Builder;
								public constructor(param0: com.google.android.gms.cast.CastDevice, param1: com.google.android.gms.cast.Cast.Listener);
							}
						}
						export class Listener {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.Listener>;
							public constructor();
							public onStandbyStateChanged(param0: number): void;
							public onApplicationDisconnected(param0: number): void;
							public onApplicationMetadataChanged(param0: com.google.android.gms.cast.ApplicationMetadata): void;
							public onActiveInputStateChanged(param0: number): void;
							public onVolumeChanged(): void;
							public onApplicationStatusChanged(): void;
						}
						export class MessageReceivedCallback {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.MessageReceivedCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.Cast$MessageReceivedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
							});
							public constructor();
							public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
						}
						export class zza extends com.google.android.gms.cast.internal.zzd<com.google.android.gms.cast.Cast.ApplicationConnectionResult> {
							public static class: java.lang.Class<com.google.android.gms.cast.Cast.zza>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastDevice {
						public static class: java.lang.Class<com.google.android.gms.cast.CastDevice>;
						public static CAPABILITY_VIDEO_OUT: number;
						public static CAPABILITY_VIDEO_IN: number;
						public static CAPABILITY_AUDIO_OUT: number;
						public static CAPABILITY_AUDIO_IN: number;
						public static CAPABILITY_MULTIZONE_GROUP: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.CastDevice>;
						public hasIcons(): boolean;
						public getIpAddress(): java.net.Inet4Address;
						public putInBundle(param0: globalAndroid.os.Bundle): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getDeviceId(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static getFromBundle(param0: globalAndroid.os.Bundle): com.google.android.gms.cast.CastDevice;
						public hasIPv6Address(): boolean;
						public isOnLocalNetwork(): boolean;
						public getIcons(): java.util.List<com.google.android.gms.common.images.WebImage>;
						public hasIPv4Address(): boolean;
						public getFriendlyName(): string;
						public getDeviceVersion(): string;
						public toString(): string;
						public isSameDevice(param0: com.google.android.gms.cast.CastDevice): boolean;
						public hasCapabilities(param0: native.Array<number>): boolean;
						public getInetAddress(): java.net.InetAddress;
						public getIcon(param0: number, param1: number): com.google.android.gms.common.images.WebImage;
						public hasCapability(param0: number): boolean;
						public getModelName(): string;
						public getServicePort(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastMediaControlIntent {
						public static class: java.lang.Class<com.google.android.gms.cast.CastMediaControlIntent>;
						public static DEFAULT_MEDIA_RECEIVER_APPLICATION_ID: string;
						public static ACTION_SYNC_STATUS: string;
						public static EXTRA_CUSTOM_DATA: string;
						public static EXTRA_CAST_APPLICATION_ID: string;
						public static EXTRA_CAST_RELAUNCH_APPLICATION: string;
						public static EXTRA_CAST_LANGUAGE_CODE: string;
						public static EXTRA_CAST_STOP_APPLICATION_WHEN_SESSION_ENDS: string;
						public static EXTRA_DEBUG_LOGGING_ENABLED: string;
						public static EXTRA_ERROR_CODE: string;
						public static ERROR_CODE_REQUEST_FAILED: number;
						public static ERROR_CODE_SESSION_START_FAILED: number;
						public static ERROR_CODE_TEMPORARILY_DISCONNECTED: number;
						public static categoryForRemotePlayback(): string;
						public static categoryForCast(param0: java.util.Collection<string>): string;
						public static categoryForCast(param0: string, param1: java.util.Collection<string>): string;
						public static categoryForRemotePlayback(param0: string): string;
						public static languageTagForLocale(param0: java.util.Locale): string;
						public static categoryForCast(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastPresentation {
						public static class: java.lang.Class<com.google.android.gms.cast.CastPresentation>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastRemoteDisplay {
						public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay>;
						public static CONFIGURATION_INTERACTIVE_REALTIME: number;
						public static CONFIGURATION_INTERACTIVE_NONREALTIME: number;
						public static CONFIGURATION_NONINTERACTIVE: number;
						public static EXTRA_INT_SESSION_ENDED_STATUS_CODE: string;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions>;
						public static CastRemoteDisplayApi: com.google.android.gms.cast.CastRemoteDisplayApi;
						public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.cast.CastRemoteDisplayClient;
						public static isRemoteDisplaySdkSupported(param0: globalAndroid.content.Context): boolean;
					}
					export module CastRemoteDisplay {
						export class CastRemoteDisplayOptions {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions>;
						}
						export module CastRemoteDisplayOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions.Builder>;
								public setConfigPreset(param0: number): com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions.Builder;
								public constructor(param0: com.google.android.gms.cast.CastDevice, param1: com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks);
								public build(): com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions;
							}
						}
						export class CastRemoteDisplaySessionCallbacks {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$CastRemoteDisplaySessionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRemoteDisplayEnded(param0: com.google.android.gms.common.api.Status): void;
							});
							public constructor();
							public onRemoteDisplayEnded(param0: com.google.android.gms.common.api.Status): void;
						}
						export class CastRemoteDisplaySessionResult {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$CastRemoteDisplaySessionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPresentationDisplay(): globalAndroid.view.Display;
							});
							public constructor();
							public getPresentationDisplay(): globalAndroid.view.Display;
						}
						export class Configuration {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.Configuration>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$Configuration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastRemoteDisplayApi {
						public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplayApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
							stopRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
						});
						public constructor();
						public startRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
						public stopRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastRemoteDisplayClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayClient>;
						public stopRemoteDisplay(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public startRemoteDisplay(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: number, param3: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<globalAndroid.view.Display>;
					}
					export module CastRemoteDisplayClient {
						export class zza extends com.google.android.gms.internal.cast.zzdk {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayClient.zza>;
							public onError(param0: number): void;
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export abstract class CastRemoteDisplayLocalService {
						public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService>;
						public constructor();
						public static startServiceWithOptions(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string, param3: com.google.android.gms.cast.CastDevice, param4: com.google.android.gms.cast.CastRemoteDisplayLocalService.Options, param5: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings, param6: com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks): void;
						public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						public onCreatePresentation(param0: globalAndroid.view.Display): void;
						public static startService(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string, param3: com.google.android.gms.cast.CastDevice, param4: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings, param5: com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks): void;
						public getDisplay(): globalAndroid.view.Display;
						public static getInstance(): com.google.android.gms.cast.CastRemoteDisplayLocalService;
						public onCreate(): void;
						public onDismissPresentation(): void;
						public static stopService(): void;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
						public static setDebugEnabled(): void;
						public updateNotificationSettings(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings): void;
					}
					export module CastRemoteDisplayLocalService {
						export class Callbacks {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplayLocalService$Callbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onServiceCreated(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
								onRemoteDisplaySessionStarted(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
								onRemoteDisplaySessionError(param0: com.google.android.gms.common.api.Status): void;
								onRemoteDisplaySessionEnded(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
							});
							public constructor();
							public onRemoteDisplaySessionError(param0: com.google.android.gms.common.api.Status): void;
							public onRemoteDisplaySessionEnded(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
							public onServiceCreated(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
							public onRemoteDisplaySessionStarted(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
						}
						export class NotificationSettings {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings>;
						}
						export module NotificationSettings {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder>;
								public setNotificationText(param0: string): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
								public build(): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings;
								public setNotification(param0: globalAndroid.app.Notification): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
								public setNotificationPendingIntent(param0: globalAndroid.app.PendingIntent): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
								public setNotificationTitle(param0: string): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
								public constructor();
							}
						}
						export class Options {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.Options>;
							public constructor();
							public getConfigPreset(): number;
							public setConfigPreset(param0: number): void;
						}
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.zza>;
						}
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.zzb>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class CastStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.cast.CastStatusCodes>;
						public static SUCCESS: number;
						public static NETWORK_ERROR: number;
						public static TIMEOUT: number;
						public static INTERRUPTED: number;
						public static INTERNAL_ERROR: number;
						public static UNKNOWN_ERROR: number;
						public static AUTHENTICATION_FAILED: number;
						public static INVALID_REQUEST: number;
						public static CANCELED: number;
						public static NOT_ALLOWED: number;
						public static APPLICATION_NOT_FOUND: number;
						public static APPLICATION_NOT_RUNNING: number;
						public static MESSAGE_TOO_LARGE: number;
						public static MESSAGE_SEND_BUFFER_TOO_FULL: number;
						public static DEVICE_CONNECTION_SUSPENDED: number;
						public static FAILED: number;
						public static REPLACED: number;
						public static ERROR_SERVICE_CREATION_FAILED: number;
						public static ERROR_SERVICE_DISCONNECTED: number;
						public static ERROR_STOPPING_SERVICE_FAILED: number;
						public static getStatusCodeString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class HlsSegmentFormat {
						public static class: java.lang.Class<com.google.android.gms.cast.HlsSegmentFormat>;
						/**
						 * Constructs a new instance of the com.google.android.gms.cast.HlsSegmentFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static AC3: string;
						public static MP3: string;
						public static AAC: string;
						public static TS_AAC: string;
						public static TS: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class LaunchOptions {
						public static class: java.lang.Class<com.google.android.gms.cast.LaunchOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.LaunchOptions>;
						public getRelaunchIfRunning(): boolean;
						public constructor();
						public getAndroidReceiverCompatible(): boolean;
						public setRelaunchIfRunning(param0: boolean): void;
						public setLanguage(param0: string): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getLanguage(): string;
						public toString(): string;
					}
					export module LaunchOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.LaunchOptions.Builder>;
							public constructor();
							public build(): com.google.android.gms.cast.LaunchOptions;
							public setLocale(param0: java.util.Locale): com.google.android.gms.cast.LaunchOptions.Builder;
							public setRelaunchIfRunning(param0: boolean): com.google.android.gms.cast.LaunchOptions.Builder;
							public setAndroidReceiverCompatible(param0: boolean): com.google.android.gms.cast.LaunchOptions.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaError {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaError>;
						public static ERROR_REASON_INVALID_COMMAND: string;
						public static ERROR_REASON_INVALID_PARAMS: string;
						public static ERROR_REASON_INVALID_MEDIA_SESSION_ID: string;
						public static ERROR_REASON_SKIP_LIMIT_REACHED: string;
						public static ERROR_REASON_NOT_SUPPORTED: string;
						public static ERROR_REASON_LANGUAGE_NOT_SUPPORTED: string;
						public static ERROR_REASON_END_OF_QUEUE: string;
						public static ERROR_REASON_DUPLICATE_REQUEST_ID: string;
						public static ERROR_REASON_VIDEO_DEVICE_REQUIRED: string;
						public static ERROR_REASON_PREMIUM_ACCOUNT_REQUIRED: string;
						public static ERROR_REASON_APP_ERROR: string;
						public static ERROR_REASON_AUTHENTICATION_EXPIRED: string;
						public static ERROR_REASON_CONCURRENT_STREAM_LIMIT: string;
						public static ERROR_REASON_PARENTAL_CONTROL_RESTRICTED: string;
						public static ERROR_REASON_CONTENT_FILTERED: string;
						public static ERROR_REASON_NOT_AVAILABLE_IN_REGION: string;
						public static ERROR_REASON_CONTENT_ALREADY_PLAYING: string;
						public static ERROR_REASON_INVALID_REQUEST: string;
						public static ERROR_REASON_GENERIC_LOAD_ERROR: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaError>;
						public getDetailedErrorCode(): java.lang.Integer;
						public toJson(): org.json.JSONObject;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getRequestId(): number;
						public getReason(): string;
						public constructor(param0: number, param1: java.lang.Integer, param2: string);
					}
					export module MediaError {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaError.Builder>;
							public constructor();
							public setReason(param0: string): com.google.android.gms.cast.MediaError.Builder;
							public build(): com.google.android.gms.cast.MediaError;
							public setDetailedErrorCode(param0: java.lang.Integer): com.google.android.gms.cast.MediaError.Builder;
						}
						export class DetailedErrorCode {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaError.DetailedErrorCode>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.MediaError$DetailedErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static MEDIA_ABORTED: number;
							public static MEDIA_NETWORK: number;
							public static HLS_MANIFEST_MASTER: number;
							public static DASH_INVALID_SEGMENT_INFO: number;
							public static DASH_MANIFEST_UNKNOWN: number;
							public static APP: number;
							public static BREAK_CLIP_LOADING_ERROR: number;
							public static BREAK_SEEK_INTERCEPTOR_ERROR: number;
							public static SMOOTH_MANIFEST: number;
							public static HLS_MANIFEST_PLAYLIST: number;
							public static LOAD_INTERRUPTED: number;
							public static HLS_NETWORK_MASTER_PLAYLIST: number;
							public static SEGMENT_NETWORK: number;
							public static SMOOTH_NO_MEDIA_DATA: number;
							public static HLS_SEGMENT_PARSING: number;
							public static TEXT_UNKNOWN: number;
							public static IMAGE_ERROR: number;
							public static MEDIAKEYS_UNKNOWN: number;
							public static MEDIAKEYS_NETWORK: number;
							public static MEDIA_SRC_NOT_SUPPORTED: number;
							public static DASH_NO_INIT: number;
							public static MEDIA_UNKNOWN: number;
							public static HLS_NETWORK_PLAYLIST: number;
							public static HLS_NETWORK_INVALID_SEGMENT: number;
							public static DASH_NETWORK: number;
							public static MEDIAKEYS_WEBCRYPTO: number;
							public static SOURCE_BUFFER_FAILURE: number;
							public static LOAD_FAILED: number;
							public static HLS_NETWORK_NO_KEY_RESPONSE: number;
							public static MEDIA_DECODE: number;
							public static MANIFEST_UNKNOWN: number;
							public static DASH_MANIFEST_NO_MIMETYPE: number;
							public static NETWORK_UNKNOWN: number;
							public static GENERIC: number;
							public static HLS_NETWORK_KEY_LOAD: number;
							public static DASH_MANIFEST_NO_PERIODS: number;
							public static SEGMENT_UNKNOWN: number;
							public static MEDIA_ERROR_MESSAGE: number;
							public static MEDIAKEYS_UNSUPPORTED: number;
							public static SMOOTH_NETWORK: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaInfo {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaInfo>;
						public static STREAM_TYPE_NONE: number;
						public static STREAM_TYPE_BUFFERED: number;
						public static STREAM_TYPE_LIVE: number;
						public static STREAM_TYPE_INVALID: number;
						public static UNKNOWN_DURATION: number;
						public static UNKNOWN_START_ABSOLUTE_TIME: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaInfo>;
						public setAdBreaks(param0: java.util.List<com.google.android.gms.cast.AdBreakInfo>): void;
						public setCustomData(param0: org.json.JSONObject): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getMetadata(): com.google.android.gms.cast.MediaMetadata;
						public setContentType(param0: string): void;
						public setContentId(param0: string): void;
						public getContentUrl(): string;
						public getCustomData(): org.json.JSONObject;
						public setStreamType(param0: number): void;
						public getContentId(): string;
						public setStartAbsoluteTime(param0: number): void;
						public setContentUrl(param0: string): void;
						public getStartAbsoluteTime(): number;
						public setEntity(param0: string): void;
						public getVmapAdsRequest(): com.google.android.gms.cast.VastAdsRequest;
						public setTextTrackStyle(param0: com.google.android.gms.cast.TextTrackStyle): void;
						public getStreamDuration(): number;
						public setMediaTracks(param0: java.util.List<com.google.android.gms.cast.MediaTrack>): void;
						public getAdBreaks(): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
						public getEntity(): string;
						public setAdBreakClips(param0: java.util.List<com.google.android.gms.cast.AdBreakClipInfo>): void;
						public getTextTrackStyle(): com.google.android.gms.cast.TextTrackStyle;
						public setMetadata(param0: com.google.android.gms.cast.MediaMetadata): void;
						public toJson(): org.json.JSONObject;
						public getStreamType(): number;
						public getMediaTracks(): java.util.List<com.google.android.gms.cast.MediaTrack>;
						public setStreamDuration(param0: number): void;
						public setVmapAdsRequest(param0: com.google.android.gms.cast.VastAdsRequest): void;
						public getContentType(): string;
						public getAdBreakClips(): java.util.List<com.google.android.gms.cast.AdBreakClipInfo>;
					}
					export module MediaInfo {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaInfo.Builder>;
							public setTextTrackStyle(param0: com.google.android.gms.cast.TextTrackStyle): com.google.android.gms.cast.MediaInfo.Builder;
							public setVmapAdsRequest(param0: com.google.android.gms.cast.VastAdsRequest): com.google.android.gms.cast.MediaInfo.Builder;
							public setContentUrl(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
							public setMetadata(param0: com.google.android.gms.cast.MediaMetadata): com.google.android.gms.cast.MediaInfo.Builder;
							public constructor(param0: string, param1: string);
							public setMediaTracks(param0: java.util.List<com.google.android.gms.cast.MediaTrack>): com.google.android.gms.cast.MediaInfo.Builder;
							public setStreamDuration(param0: number): com.google.android.gms.cast.MediaInfo.Builder;
							public constructor(param0: string);
							public setStreamType(param0: number): com.google.android.gms.cast.MediaInfo.Builder;
							public setAdBreaks(param0: java.util.List<com.google.android.gms.cast.AdBreakInfo>): com.google.android.gms.cast.MediaInfo.Builder;
							public setContentType(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaInfo.Builder;
							public setAdBreakClips(param0: java.util.List<com.google.android.gms.cast.AdBreakClipInfo>): com.google.android.gms.cast.MediaInfo.Builder;
							public setEntity(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
							public setAtvEntity(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
							public build(): com.google.android.gms.cast.MediaInfo;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaLiveSeekableRange {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaLiveSeekableRange>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaLiveSeekableRange>;
						public getStartTime(): number;
						public getEndTime(): number;
						public isLiveDone(): boolean;
						public isMovingWindow(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaLoadOptions {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadOptions>;
						public static PLAYBACK_RATE_MIN: number;
						public static PLAYBACK_RATE_MAX: number;
						public getCredentialsType(): string;
						public getPlaybackRate(): number;
						public getCustomData(): org.json.JSONObject;
						public getActiveTrackIds(): native.Array<number>;
						public getCredentials(): string;
						public getPlayPosition(): number;
						public getAutoplay(): boolean;
					}
					export module MediaLoadOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadOptions.Builder>;
							public constructor();
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public setAutoplay(param0: boolean): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public setCredentials(param0: string): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public setPlaybackRate(param0: number): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public setPlayPosition(param0: number): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public setCredentialsType(param0: string): com.google.android.gms.cast.MediaLoadOptions.Builder;
							public build(): com.google.android.gms.cast.MediaLoadOptions;
							public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaLoadOptions.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaLoadRequestData {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadRequestData>;
						public static PLAYBACK_RATE_MIN: number;
						public static PLAYBACK_RATE_MAX: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaLoadRequestData>;
						public getQueueData(): com.google.android.gms.cast.MediaQueueData;
						public getPlaybackRate(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getAutoplay(): java.lang.Boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getCredentials(): string;
						public setRequestId(param0: number): void;
						public getCurrentTime(): number;
						public toJson(): org.json.JSONObject;
						public getCredentialsType(): string;
						public static fromJson(param0: org.json.JSONObject): com.google.android.gms.cast.MediaLoadRequestData;
						public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
						public getRequestId(): number;
						public getCustomData(): org.json.JSONObject;
						public getActiveTrackIds(): native.Array<number>;
					}
					export module MediaLoadRequestData {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadRequestData.Builder>;
							public constructor();
							public setQueueData(param0: com.google.android.gms.cast.MediaQueueData): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setCredentials(param0: string): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setCredentialsType(param0: string): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setPlaybackRate(param0: number): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setMediaInfo(param0: com.google.android.gms.cast.MediaInfo): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setAutoplay(param0: java.lang.Boolean): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public setCurrentTime(param0: number): com.google.android.gms.cast.MediaLoadRequestData.Builder;
							public build(): com.google.android.gms.cast.MediaLoadRequestData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaMetadata {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaMetadata>;
						public static MEDIA_TYPE_GENERIC: number;
						public static MEDIA_TYPE_MOVIE: number;
						public static MEDIA_TYPE_TV_SHOW: number;
						public static MEDIA_TYPE_MUSIC_TRACK: number;
						public static MEDIA_TYPE_PHOTO: number;
						public static MEDIA_TYPE_AUDIOBOOK_CHAPTER: number;
						public static MEDIA_TYPE_USER: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaMetadata>;
						public static KEY_CREATION_DATE: string;
						public static KEY_RELEASE_DATE: string;
						public static KEY_BROADCAST_DATE: string;
						public static KEY_TITLE: string;
						public static KEY_SUBTITLE: string;
						public static KEY_ARTIST: string;
						public static KEY_ALBUM_ARTIST: string;
						public static KEY_ALBUM_TITLE: string;
						public static KEY_BOOK_TITLE: string;
						public static KEY_CHAPTER_NUMBER: string;
						public static KEY_CHAPTER_TITLE: string;
						public static KEY_COMPOSER: string;
						public static KEY_DISC_NUMBER: string;
						public static KEY_TRACK_NUMBER: string;
						public static KEY_SEASON_NUMBER: string;
						public static KEY_EPISODE_NUMBER: string;
						public static KEY_SERIES_TITLE: string;
						public static KEY_STUDIO: string;
						public static KEY_WIDTH: string;
						public static KEY_HEIGHT: string;
						public static KEY_LOCATION_NAME: string;
						public static KEY_LOCATION_LATITUDE: string;
						public static KEY_LOCATION_LONGITUDE: string;
						public static KEY_QUEUE_ITEM_ID: string;
						public static KEY_SECTION_DURATION: string;
						public static KEY_SECTION_START_ABSOLUTE_TIME: string;
						public static KEY_SECTION_START_TIME_IN_CONTAINER: string;
						public static KEY_SECTION_START_TIME_IN_MEDIA: string;
						public putDate(param0: string, param1: java.util.Calendar): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTimeMillis(param0: string): number;
						public getDate(param0: string): java.util.Calendar;
						public getDouble(param0: string): number;
						public static throwIfWrongType(param0: string, param1: number): void;
						public getMediaType(): number;
						public hasImages(): boolean;
						public getDateAsString(param0: string): string;
						public getRawValue(param0: string): any;
						public constructor();
						public putTimeMillis(param0: string, param1: number): void;
						public clearImages(): void;
						public addImage(param0: com.google.android.gms.common.images.WebImage): void;
						public remove(param0: string): void;
						public keySet(): java.util.Set<string>;
						public fromJson(param0: org.json.JSONObject): void;
						public containsKey(param0: string): boolean;
						public toJson(): org.json.JSONObject;
						public getInt(param0: string): number;
						public setMediaType(param0: number): void;
						public constructor(param0: number);
						public static getTypeForKey(param0: string): number;
						public putInt(param0: string, param1: number): void;
						public clear(): void;
						public putString(param0: string, param1: string): void;
						public getImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
						public putDouble(param0: string, param1: number): void;
						public getString(param0: string): string;
					}
					export module MediaMetadata {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaMetadata.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaQueueContainerMetadata {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata>;
						public static MEDIA_QUEUE_CONTAINER_TYPE_GENERIC: number;
						public static MEDIA_QUEUE_CONTAINER_TYPE_AUDIO_BOOK: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueContainerMetadata>;
						public getContainerType(): number;
						public toJson(): org.json.JSONObject;
						public getSections(): java.util.List<com.google.android.gms.cast.MediaMetadata>;
						public getContainerDuration(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getContainerImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
						public getTitle(): string;
					}
					export module MediaQueueContainerMetadata {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata.Builder>;
							public constructor();
							public build(): com.google.android.gms.cast.MediaQueueContainerMetadata;
							public setContainerType(param0: number): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
							public setTitle(param0: string): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
							public setContainerImages(param0: java.util.List<com.google.android.gms.common.images.WebImage>): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
							public setSections(param0: java.util.List<com.google.android.gms.cast.MediaMetadata>): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
							public setContainerDuration(param0: number): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
						}
						export class MediaQueueContainerType {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata.MediaQueueContainerType>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.MediaQueueContainerMetadata$MediaQueueContainerType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaQueueData {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData>;
						public static MEDIA_QUEUE_TYPE_GENERIC: number;
						public static MEDIA_QUEUE_TYPE_ALBUM: number;
						public static MEDIA_QUEUE_TYPE_PLAYLIST: number;
						public static MEDIA_QUEUE_TYPE_AUDIO_BOOK: number;
						public static MEDIA_QUEUE_TYPE_RADIO_STATION: number;
						public static MEDIA_QUEUE_TYPE_PODCAST_SERIES: number;
						public static MEDIA_QUEUE_TYPE_TV_SERIES: number;
						public static MEDIA_QUEUE_TYPE_VIDEO_PLAYLIST: number;
						public static MEDIA_QUEUE_TYPE_LIVE_TV: number;
						public static MEDIA_QUEUE_TYPE_MOVIE: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueData>;
						public getItems(): java.util.List<com.google.android.gms.cast.MediaQueueItem>;
						public getContainerMetadata(): com.google.android.gms.cast.MediaQueueContainerMetadata;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRepeatMode(): number;
						public getEntity(): string;
						public getStartIndex(): number;
						public getName(): string;
						public getQueueType(): number;
						public getStartTime(): number;
						public getQueueId(): string;
						public toJson(): org.json.JSONObject;
						public setRepeatMode(param0: number): void;
					}
					export module MediaQueueData {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData.Builder>;
							public constructor();
							public setQueueType(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
							public setItems(param0: java.util.List<com.google.android.gms.cast.MediaQueueItem>): com.google.android.gms.cast.MediaQueueData.Builder;
							public setQueueId(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
							public build(): com.google.android.gms.cast.MediaQueueData;
							public setStartIndex(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
							public setName(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
							public setEntity(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
							public setContainerMetadata(param0: com.google.android.gms.cast.MediaQueueContainerMetadata): com.google.android.gms.cast.MediaQueueData.Builder;
							public setRepeatMode(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
							public setStartTime(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
						}
						export class MediaQueueType {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData.MediaQueueType>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.MediaQueueData$MediaQueueType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaQueueItem {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueItem>;
						public static INVALID_ITEM_ID: number;
						public static DEFAULT_PLAYBACK_DURATION: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueItem>;
						public setMedia(param0: com.google.android.gms.cast.MediaInfo): void;
						public setAutoplay(param0: boolean): void;
						public setPlaybackDuration(param0: number): void;
						public setCustomData(param0: org.json.JSONObject): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: org.json.JSONObject);
						public getItemId(): number;
						public getAutoplay(): boolean;
						public getStartTime(): number;
						public setItemId(param0: number): void;
						public setActiveTrackIds(param0: native.Array<number>): void;
						public toJson(): org.json.JSONObject;
						public getPreloadTime(): number;
						public setPreloadTime(param0: number): void;
						public getPlaybackDuration(): number;
						public setStartTime(param0: number): void;
						public getCustomData(): org.json.JSONObject;
						public getActiveTrackIds(): native.Array<number>;
						public fromJson(param0: org.json.JSONObject): boolean;
						public getMedia(): com.google.android.gms.cast.MediaInfo;
					}
					export module MediaQueueItem {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueItem.Builder>;
							public setStartTime(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
							public constructor(param0: org.json.JSONObject);
							public setItemId(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
							public constructor(param0: com.google.android.gms.cast.MediaInfo);
							public constructor(param0: com.google.android.gms.cast.MediaQueueItem);
							public setPlaybackDuration(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
							public setPreloadTime(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
							public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaQueueItem.Builder;
							public setAutoplay(param0: boolean): com.google.android.gms.cast.MediaQueueItem.Builder;
							public clearItemId(): com.google.android.gms.cast.MediaQueueItem.Builder;
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaQueueItem.Builder;
							public build(): com.google.android.gms.cast.MediaQueueItem;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaSeekOptions {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions>;
						public static RESUME_STATE_UNCHANGED: number;
						public static RESUME_STATE_PLAY: number;
						public static RESUME_STATE_PAUSE: number;
						public isSeekToInfinite(): boolean;
						public getPosition(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getResumeState(): number;
						public getCustomData(): org.json.JSONObject;
					}
					export module MediaSeekOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions.Builder>;
							public constructor();
							public setPosition(param0: number): com.google.android.gms.cast.MediaSeekOptions.Builder;
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaSeekOptions.Builder;
							public build(): com.google.android.gms.cast.MediaSeekOptions;
							public setResumeState(param0: number): com.google.android.gms.cast.MediaSeekOptions.Builder;
							public setIsSeekToInfinite(param0: boolean): com.google.android.gms.cast.MediaSeekOptions.Builder;
						}
						export class ResumeState {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions.ResumeState>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.MediaSeekOptions$ResumeState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaStatus {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaStatus>;
						public static COMMAND_PAUSE: number;
						public static COMMAND_SEEK: number;
						public static COMMAND_SET_VOLUME: number;
						public static COMMAND_TOGGLE_MUTE: number;
						public static COMMAND_SKIP_FORWARD: number;
						public static COMMAND_SKIP_BACKWARD: number;
						public static COMMAND_QUEUE_NEXT: number;
						public static COMMAND_QUEUE_PREVIOUS: number;
						public static PLAYER_STATE_UNKNOWN: number;
						public static PLAYER_STATE_IDLE: number;
						public static PLAYER_STATE_PLAYING: number;
						public static PLAYER_STATE_PAUSED: number;
						public static PLAYER_STATE_BUFFERING: number;
						public static PLAYER_STATE_LOADING: number;
						public static IDLE_REASON_NONE: number;
						public static IDLE_REASON_FINISHED: number;
						public static IDLE_REASON_CANCELED: number;
						public static IDLE_REASON_INTERRUPTED: number;
						public static IDLE_REASON_ERROR: number;
						public static REPEAT_MODE_REPEAT_OFF: number;
						public static REPEAT_MODE_REPEAT_ALL: number;
						public static REPEAT_MODE_REPEAT_SINGLE: number;
						public static REPEAT_MODE_REPEAT_ALL_AND_SHUFFLE: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaStatus>;
						public getSupportedMediaCommands(): number;
						public getIdleReason(): number;
						public setMediaInfo(param0: com.google.android.gms.cast.MediaInfo): void;
						public getPlaybackRate(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public getQueueItemById(param0: number): com.google.android.gms.cast.MediaQueueItem;
						public getPlayerState(): number;
						public isMediaCommandSupported(param0: number): boolean;
						public getCustomData(): org.json.JSONObject;
						public getActiveTrackIds(): native.Array<number>;
						public getLoadingItemId(): number;
						public getItemById(param0: number): com.google.android.gms.cast.MediaQueueItem;
						public setPlayerState(param0: number): void;
						public getLiveSeekableRange(): com.google.android.gms.cast.MediaLiveSeekableRange;
						public setSupportedMediaCommands(param0: number): void;
						public getStreamVolume(): number;
						public getQueueRepeatMode(): number;
						public setActiveTrackIds(param0: native.Array<number>): void;
						public setCurrentItemId(param0: number): void;
						public setQueueItems(param0: java.util.List<com.google.android.gms.cast.MediaQueueItem>): void;
						public getCurrentAdBreakClip(): com.google.android.gms.cast.AdBreakClipInfo;
						public setQueueRepeatMode(param0: number): void;
						public setMute(param0: boolean): void;
						public getCurrentItemId(): number;
						public getAdBreakStatus(): com.google.android.gms.cast.AdBreakStatus;
						public setIsPlayingAd(param0: boolean): void;
						public setStreamPosition(param0: number): void;
						public setCustomData(param0: org.json.JSONObject): void;
						public getQueueItems(): java.util.List<com.google.android.gms.cast.MediaQueueItem>;
						public setPreloadedItemId(param0: number): void;
						public hashCode(): number;
						public setQueueData(param0: com.google.android.gms.cast.MediaQueueData): void;
						public getCurrentAdBreak(): com.google.android.gms.cast.AdBreakInfo;
						public setStreamVolume(param0: number): void;
						public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
						public getStreamPosition(): number;
						public getQueueItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
						public getItemByIndex(param0: number): com.google.android.gms.cast.MediaQueueItem;
						public getQueueData(): com.google.android.gms.cast.MediaQueueData;
						public getPreloadedItemId(): number;
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: com.google.android.gms.cast.MediaInfo, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: native.Array<number>, param11: number, param12: number, param13: string, param14: number, param15: java.util.List<com.google.android.gms.cast.MediaQueueItem>, param16: boolean, param17: com.google.android.gms.cast.AdBreakStatus, param18: com.google.android.gms.cast.VideoInfo, param19: com.google.android.gms.cast.MediaLiveSeekableRange, param20: com.google.android.gms.cast.MediaQueueData);
						public setLoadingItemId(param0: number): void;
						public setLiveSeekableRange(param0: com.google.android.gms.cast.MediaLiveSeekableRange): void;
						public toJson(): org.json.JSONObject;
						public isMute(): boolean;
						public setPlaybackRate(param0: number): void;
						public isPlayingAd(): boolean;
						public setIdleReason(param0: number): void;
						public getQueueItemCount(): number;
						public getVideoInfo(): com.google.android.gms.cast.VideoInfo;
						public getIndexById(param0: number): java.lang.Integer;
						public setAdBreakStatus(param0: com.google.android.gms.cast.AdBreakStatus): void;
						public setVideoInfo(param0: com.google.android.gms.cast.VideoInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class MediaTrack {
						public static class: java.lang.Class<com.google.android.gms.cast.MediaTrack>;
						public static TYPE_UNKNOWN: number;
						public static TYPE_TEXT: number;
						public static TYPE_AUDIO: number;
						public static TYPE_VIDEO: number;
						public static SUBTYPE_UNKNOWN: number;
						public static SUBTYPE_NONE: number;
						public static SUBTYPE_SUBTITLES: number;
						public static SUBTYPE_CAPTIONS: number;
						public static SUBTYPE_DESCRIPTIONS: number;
						public static SUBTYPE_CHAPTERS: number;
						public static SUBTYPE_METADATA: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaTrack>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getType(): number;
						public getName(): string;
						public getId(): number;
						public setContentType(param0: string): void;
						public setContentId(param0: string): void;
						public getSubtype(): number;
						public toJson(): org.json.JSONObject;
						public getContentType(): string;
						public getCustomData(): org.json.JSONObject;
						public getLanguage(): string;
						public getContentId(): string;
					}
					export module MediaTrack {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.MediaTrack.Builder>;
							public setContentType(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
							public setLanguage(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
							public constructor(param0: number, param1: number);
							public setSubtype(param0: number): com.google.android.gms.cast.MediaTrack.Builder;
							public setContentId(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
							public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaTrack.Builder;
							public build(): com.google.android.gms.cast.MediaTrack;
							public setName(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
							public setLanguage(param0: java.util.Locale): com.google.android.gms.cast.MediaTrack.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class RemoteMediaPlayer extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
						public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer>;
						public static NAMESPACE: string;
						public static RESUME_STATE_UNCHANGED: number;
						public static RESUME_STATE_PLAY: number;
						public static RESUME_STATE_PAUSE: number;
						public static STATUS_SUCCEEDED: number;
						public static STATUS_FAILED: number;
						public static STATUS_CANCELED: number;
						public static STATUS_TIMED_OUT: number;
						public static STATUS_REPLACED: number;
						public queueAppendItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaQueueItem, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueMoveItemToNewIndex(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueSetRepeatMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
						public queueLoad(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<com.google.android.gms.cast.MediaQueueItem>, param2: number, param3: number, param4: number, param5: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public seek(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public load(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaInfo, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public stop(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueRemoveItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public pause(param0: com.google.android.gms.common.api.GoogleApiClient, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public play(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setStreamMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public play(param0: com.google.android.gms.common.api.GoogleApiClient, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setOnQueueStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnQueueStatusUpdatedListener): void;
						public setStreamVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueUpdateItems(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<com.google.android.gms.cast.MediaQueueItem>, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
						public requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setOnPreloadStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnPreloadStatusUpdatedListener): void;
						public queueLoad(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<com.google.android.gms.cast.MediaQueueItem>, param2: number, param3: number, param4: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueRemoveItems(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<number>, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueJumpToItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setTextTrackStyle(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.TextTrackStyle): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public constructor();
						public queuePrev(param0: com.google.android.gms.common.api.GoogleApiClient, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setOnMetadataUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnMetadataUpdatedListener): void;
						public seek(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueInsertAndPlayItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaQueueItem, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueNext(param0: com.google.android.gms.common.api.GoogleApiClient, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public getStreamDuration(): number;
						public seek(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setActiveMediaTracks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<number>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setOnStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnStatusUpdatedListener): void;
						public queueInsertAndPlayItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaQueueItem, param2: number, param3: number, param4: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public getApproximateStreamPosition(): number;
						public load(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaInfo): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public stop(param0: com.google.android.gms.common.api.GoogleApiClient, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueReorderItems(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<number>, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public pause(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public getNamespace(): string;
						public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
						public setStreamMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public load(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaInfo, param2: boolean, param3: number, param4: native.Array<number>, param5: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public setStreamVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public load(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaInfo, param2: boolean, param3: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueInsertItems(param0: com.google.android.gms.common.api.GoogleApiClient, param1: native.Array<com.google.android.gms.cast.MediaQueueItem>, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public queueJumpToItem(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
						public load(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.cast.MediaInfo, param2: boolean, param3: number, param4: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
					}
					export module RemoteMediaPlayer {
						export class MediaChannelResult {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$MediaChannelResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCustomData(): org.json.JSONObject;
							});
							public constructor();
							public getCustomData(): org.json.JSONObject;
						}
						export class OnMetadataUpdatedListener {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnMetadataUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnMetadataUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMetadataUpdated(): void;
							});
							public constructor();
							public onMetadataUpdated(): void;
						}
						export class OnPreloadStatusUpdatedListener {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnPreloadStatusUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnPreloadStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPreloadStatusUpdated(): void;
							});
							public constructor();
							public onPreloadStatusUpdated(): void;
						}
						export class OnQueueStatusUpdatedListener {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnQueueStatusUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnQueueStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onQueueStatusUpdated(): void;
							});
							public constructor();
							public onQueueStatusUpdated(): void;
						}
						export class OnStatusUpdatedListener {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnStatusUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStatusUpdated(): void;
							});
							public constructor();
							public onStatusUpdated(): void;
						}
						export class zza extends com.google.android.gms.cast.internal.zzan {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zza>;
							public constructor(param0: com.google.android.gms.cast.RemoteMediaPlayer);
						}
						export abstract class zzb extends com.google.android.gms.cast.internal.zzd<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult> {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zzb>;
						}
						export class zzc extends com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult {
							public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zzc>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public getCustomData(): org.json.JSONObject;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class TextTrackStyle {
						public static class: java.lang.Class<com.google.android.gms.cast.TextTrackStyle>;
						public static DEFAULT_FONT_SCALE: number;
						public static COLOR_UNSPECIFIED: number;
						public static EDGE_TYPE_UNSPECIFIED: number;
						public static EDGE_TYPE_NONE: number;
						public static EDGE_TYPE_OUTLINE: number;
						public static EDGE_TYPE_DROP_SHADOW: number;
						public static EDGE_TYPE_RAISED: number;
						public static EDGE_TYPE_DEPRESSED: number;
						public static WINDOW_TYPE_UNSPECIFIED: number;
						public static WINDOW_TYPE_NONE: number;
						public static WINDOW_TYPE_NORMAL: number;
						public static WINDOW_TYPE_ROUNDED: number;
						public static FONT_FAMILY_UNSPECIFIED: number;
						public static FONT_FAMILY_SANS_SERIF: number;
						public static FONT_FAMILY_MONOSPACED_SANS_SERIF: number;
						public static FONT_FAMILY_SERIF: number;
						public static FONT_FAMILY_MONOSPACED_SERIF: number;
						public static FONT_FAMILY_CASUAL: number;
						public static FONT_FAMILY_CURSIVE: number;
						public static FONT_FAMILY_SMALL_CAPITALS: number;
						public static FONT_STYLE_UNSPECIFIED: number;
						public static FONT_STYLE_NORMAL: number;
						public static FONT_STYLE_BOLD: number;
						public static FONT_STYLE_ITALIC: number;
						public static FONT_STYLE_BOLD_ITALIC: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.TextTrackStyle>;
						public getFontGenericFamily(): number;
						public setCustomData(param0: org.json.JSONObject): void;
						public getForegroundColor(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setWindowType(param0: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setWindowColor(param0: number): void;
						public setFontScale(param0: number): void;
						public getEdgeColor(): number;
						public getEdgeType(): number;
						public getWindowCornerRadius(): number;
						public getWindowColor(): number;
						public setEdgeColor(param0: number): void;
						public setBackgroundColor(param0: number): void;
						public getCustomData(): org.json.JSONObject;
						public setFontGenericFamily(param0: number): void;
						public getFontStyle(): number;
						public getBackgroundColor(): number;
						public constructor();
						public static fromSystemSettings(param0: globalAndroid.content.Context): com.google.android.gms.cast.TextTrackStyle;
						public setFontStyle(param0: number): void;
						public fromJson(param0: org.json.JSONObject): void;
						public getWindowType(): number;
						public toJson(): org.json.JSONObject;
						public setFontFamily(param0: string): void;
						public getFontScale(): number;
						public setForegroundColor(param0: number): void;
						public setEdgeType(param0: number): void;
						public setWindowCornerRadius(param0: number): void;
						public getFontFamily(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class VastAdsRequest {
						public static class: java.lang.Class<com.google.android.gms.cast.VastAdsRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VastAdsRequest>;
						public toJson(): org.json.JSONObject;
						public getAdsResponse(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAdTagUrl(): string;
						public static fromJson(param0: org.json.JSONObject): com.google.android.gms.cast.VastAdsRequest;
					}
					export module VastAdsRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.cast.VastAdsRequest.Builder>;
							public constructor();
							public setAdsResponse(param0: string): com.google.android.gms.cast.VastAdsRequest.Builder;
							public build(): com.google.android.gms.cast.VastAdsRequest;
							public setAdTagUrl(param0: string): com.google.android.gms.cast.VastAdsRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class VideoInfo {
						public static class: java.lang.Class<com.google.android.gms.cast.VideoInfo>;
						public static HDR_TYPE_UNKNOWN: number;
						public static HDR_TYPE_SDR: number;
						public static HDR_TYPE_HDR10: number;
						public static HDR_TYPE_DV: number;
						public static HDR_TYPE_HDR: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VideoInfo>;
						public getWidth(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getHeight(): number;
						public getHdrType(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class AppVisibilityListener {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.AppVisibilityListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.AppVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAppEnteredForeground(): void;
								onAppEnteredBackground(): void;
							});
							public constructor();
							public onAppEnteredForeground(): void;
							public onAppEnteredBackground(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastButtonFactory {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastButtonFactory>;
							public static setUpMediaRouteButton(param0: globalAndroid.content.Context, param1: globalAndroid.view.Menu, param2: number): globalAndroid.view.MenuItem;
							public static setUpMediaRouteButton(param0: globalAndroid.content.Context, param1: androidx.mediarouter.app.MediaRouteButton): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastContext {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastContext>;
							public static OPTIONS_PROVIDER_CLASS_NAME_KEY: string;
							public onDispatchVolumeKeyEventBeforeJellyBean(param0: globalAndroid.view.KeyEvent): boolean;
							public removeCastStateListener(param0: com.google.android.gms.cast.framework.CastStateListener): void;
							public getSessionManager(): com.google.android.gms.cast.framework.SessionManager;
							public addAppVisibilityListener(param0: com.google.android.gms.cast.framework.AppVisibilityListener): void;
							public getPrecacheManager(): com.google.android.gms.cast.framework.PrecacheManager;
							public getCastState(): number;
							public static getSharedInstance(): com.google.android.gms.cast.framework.CastContext;
							public getMediaNotificationManager(): com.google.android.gms.cast.framework.MediaNotificationManager;
							public addCastStateListener(param0: com.google.android.gms.cast.framework.CastStateListener): void;
							public static getSharedInstance(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastContext;
							public getCastOptions(): com.google.android.gms.cast.framework.CastOptions;
							public setReceiverApplicationId(param0: string): void;
							public removeAppVisibilityListener(param0: com.google.android.gms.cast.framework.AppVisibilityListener): void;
							public getMergedSelector(): androidx.mediarouter.media.MediaRouteSelector;
							public isAppVisible(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastOptions {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.CastOptions>;
							public getStopReceiverApplicationWhenEndingSession(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getLaunchOptions(): com.google.android.gms.cast.LaunchOptions;
							public getVolumeDeltaBeforeIceCreamSandwich(): number;
							public getReceiverApplicationId(): string;
							public getCastMediaOptions(): com.google.android.gms.cast.framework.media.CastMediaOptions;
							public setReceiverApplicationId(param0: string): void;
							public getEnableReconnectionService(): boolean;
							public getSupportedNamespaces(): java.util.List<string>;
							public getResumeSavedSession(): boolean;
						}
						export module CastOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.CastOptions.Builder>;
								public setLaunchOptions(param0: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setStopReceiverApplicationWhenEndingSession(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
								public build(): com.google.android.gms.cast.framework.CastOptions;
								public setCastMediaOptions(param0: com.google.android.gms.cast.framework.media.CastMediaOptions): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setSupportedNamespaces(param0: java.util.List<string>): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setVolumeDeltaBeforeIceCreamSandwich(param0: number): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setReceiverApplicationId(param0: string): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setResumeSavedSession(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
								public setEnableReconnectionService(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastSession extends com.google.android.gms.cast.framework.Session {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession>;
							public setVolume(param0: number): void;
							public getSessionRemainingTimeMs(): number;
							public onStarting(param0: globalAndroid.os.Bundle): void;
							public end(param0: boolean): void;
							public resume(param0: globalAndroid.os.Bundle): void;
							public requestStatus(): void;
							public setMute(param0: boolean): void;
							public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.google.android.gms.cast.framework.CastOptions, param4: any /* com.google.android.gms.internal.cast.zzq*/, param5: any /* com.google.android.gms.cast.framework.media.internal.zzk*/);
							public getStandbyState(): number;
							public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
							public getActiveInputState(): number;
							public start(param0: globalAndroid.os.Bundle): void;
							public getApplicationConnectionResult(): com.google.android.gms.cast.Cast.ApplicationConnectionResult;
							public getVolume(): number;
							public addCastListener(param0: com.google.android.gms.cast.Cast.Listener): void;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
							public getCastDevice(): com.google.android.gms.cast.CastDevice;
							public sendMessage(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
							public removeCastListener(param0: com.google.android.gms.cast.Cast.Listener): void;
							public onResuming(param0: globalAndroid.os.Bundle): void;
							public isMute(): boolean;
							public removeMessageReceivedCallbacks(param0: string): void;
							public getApplicationStatus(): string;
						}
						export module CastSession {
							export class zza extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.cast.Cast.ApplicationConnectionResult> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zza>;
							}
							export class zzb extends com.google.android.gms.cast.Cast.Listener {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzb>;
								public onApplicationDisconnected(param0: number): void;
								public onVolumeChanged(): void;
								public onActiveInputStateChanged(param0: number): void;
								public onStandbyStateChanged(param0: number): void;
								public onApplicationMetadataChanged(param0: com.google.android.gms.cast.ApplicationMetadata): void;
								public onApplicationStatusChanged(): void;
							}
							export class zzc extends com.google.android.gms.cast.framework.zzi {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzc>;
							}
							export class zzd extends com.google.android.gms.internal.cast.zzr {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzd>;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastState {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastState>;
							public static NO_DEVICES_AVAILABLE: number;
							public static NOT_CONNECTED: number;
							public static CONNECTING: number;
							public static CONNECTED: number;
							public static toString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class CastStateListener {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.CastStateListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.CastStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCastStateChanged(param0: number): void;
							});
							public constructor();
							public onCastStateChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class IntroductoryOverlay {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.IntroductoryOverlay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(): void;
								remove(): void;
							});
							public constructor();
							public show(): void;
							public remove(): void;
						}
						export module IntroductoryOverlay {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.Builder>;
								public setButtonText(param0: string): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setOverlayColor(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setOnOverlayDismissedListener(param0: com.google.android.gms.cast.framework.IntroductoryOverlay.OnOverlayDismissedListener): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public constructor(param0: globalAndroid.app.Activity, param1: androidx.mediarouter.app.MediaRouteButton);
								public getActivity(): globalAndroid.app.Activity;
								public build(): com.google.android.gms.cast.framework.IntroductoryOverlay;
								public setFocusRadiusId(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setButtonText(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setTitleText(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setSingleTime(): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public setFocusRadius(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
								public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.view.MenuItem);
								public setTitleText(param0: string): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
							}
							export class OnOverlayDismissedListener {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.OnOverlayDismissedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.framework.IntroductoryOverlay$OnOverlayDismissedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onOverlayDismissed(): void;
								});
								public constructor();
								public onOverlayDismissed(): void;
							}
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.zza>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class MediaNotificationManager {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.MediaNotificationManager>;
							public constructor(param0: com.google.android.gms.cast.framework.SessionManager);
							public updateNotification(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class OptionsProvider {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.OptionsProvider>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.OptionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCastOptions(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastOptions;
								getAdditionalSessionProviders(param0: globalAndroid.content.Context): java.util.List<com.google.android.gms.cast.framework.SessionProvider>;
							});
							public constructor();
							public getCastOptions(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastOptions;
							public getAdditionalSessionProviders(param0: globalAndroid.content.Context): java.util.List<com.google.android.gms.cast.framework.SessionProvider>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class PrecacheManager {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.PrecacheManager>;
							public precache(param0: string): void;
							public constructor(param0: com.google.android.gms.cast.framework.CastOptions, param1: com.google.android.gms.cast.framework.SessionManager, param2: any /* com.google.android.gms.cast.internal.zzf*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class ReconnectionService {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.ReconnectionService>;
							public constructor();
							public onCreate(): void;
							public onDestroy(): void;
							public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class Session {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.Session>;
							public isResuming(): boolean;
							public notifySessionEnded(param0: number): void;
							public notifySessionStarted(param0: string): void;
							public getSessionRemainingTimeMs(): number;
							public isDisconnecting(): boolean;
							public isConnected(): boolean;
							public notifyFailedToResumeSession(param0: number): void;
							public onStarting(param0: globalAndroid.os.Bundle): void;
							public isDisconnected(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
							public end(param0: boolean): void;
							public resume(param0: globalAndroid.os.Bundle): void;
							public isConnecting(): boolean;
							public onResuming(param0: globalAndroid.os.Bundle): void;
							public getCategory(): string;
							public isSuspended(): boolean;
							public getSessionId(): string;
							public notifySessionResumed(param0: boolean): void;
							public start(param0: globalAndroid.os.Bundle): void;
							public notifyFailedToStartSession(param0: number): void;
							public notifySessionSuspended(param0: number): void;
						}
						export module Session {
							export class zza extends com.google.android.gms.cast.framework.zzab {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.Session.zza>;
								public start(param0: globalAndroid.os.Bundle): void;
								public resume(param0: globalAndroid.os.Bundle): void;
								public onResuming(param0: globalAndroid.os.Bundle): void;
								public onStarting(param0: globalAndroid.os.Bundle): void;
								public end(param0: boolean): void;
								public getSessionRemainingTimeMs(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class SessionManager {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionManager>;
							public addSessionManagerListener(param0: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>): void;
							public getCurrentCastSession(): com.google.android.gms.cast.framework.CastSession;
							public getCurrentSession(): com.google.android.gms.cast.framework.Session;
							public startSession(param0: globalAndroid.content.Intent): void;
							public constructor(param0: any /* com.google.android.gms.cast.framework.zzt*/, param1: globalAndroid.content.Context);
							public removeSessionManagerListener(param0: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>): void;
							public endCurrentSession(param0: boolean): void;
							public addSessionManagerListener(param0: com.google.android.gms.cast.framework.SessionManagerListener<any>, param1: java.lang.Class): void;
							public removeSessionManagerListener(param0: com.google.android.gms.cast.framework.SessionManagerListener<any>, param1: java.lang.Class): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class SessionManagerListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionManagerListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.SessionManagerListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSessionStarting(param0: T): void;
								onSessionStarted(param0: T, param1: string): void;
								onSessionStartFailed(param0: T, param1: number): void;
								onSessionEnding(param0: T): void;
								onSessionEnded(param0: T, param1: number): void;
								onSessionResuming(param0: T, param1: string): void;
								onSessionResumed(param0: T, param1: boolean): void;
								onSessionResumeFailed(param0: T, param1: number): void;
								onSessionSuspended(param0: T, param1: number): void;
							});
							public constructor();
							public onSessionStarting(param0: T): void;
							public onSessionEnding(param0: T): void;
							public onSessionResumeFailed(param0: T, param1: number): void;
							public onSessionStartFailed(param0: T, param1: number): void;
							public onSessionSuspended(param0: T, param1: number): void;
							public onSessionEnded(param0: T, param1: number): void;
							public onSessionResuming(param0: T, param1: string): void;
							public onSessionStarted(param0: T, param1: string): void;
							public onSessionResumed(param0: T, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class SessionProvider {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionProvider>;
							public getCategory(): string;
							public getContext(): globalAndroid.content.Context;
							public isSessionRecoverable(): boolean;
							public createSession(param0: string): com.google.android.gms.cast.framework.Session;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
						export module SessionProvider {
							export class zza extends com.google.android.gms.cast.framework.zzaa {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionProvider.zza>;
								public getCategory(): string;
								public isSessionRecoverable(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class HelpTextView implements com.google.android.gms.cast.framework.internal.featurehighlight.zzi {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.HelpTextView>;
									public setText(param0: string, param1: string): void;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
									public asView(): globalAndroid.view.View;
									public onFinishInflate(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class InnerZoneDrawable {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.InnerZoneDrawable>;
									public setAlpha(param0: number): void;
									public draw(param0: globalAndroid.graphics.Canvas): void;
									public setScale(param0: number): void;
									public setPulseAlpha(param0: number): void;
									public constructor(param0: globalAndroid.content.Context);
									public getOpacity(): number;
									public setPulseScale(param0: number): void;
									public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class OuterHighlightDrawable {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.OuterHighlightDrawable>;
									public setScale(param0: number): void;
									public getColor(): number;
									public setTranslationY(param0: number): void;
									public setTranslationX(param0: number): void;
									public getAlpha(): number;
									public setAlpha(param0: number): void;
									public draw(param0: globalAndroid.graphics.Canvas): void;
									public setColor(param0: number): void;
									public constructor(param0: globalAndroid.content.Context);
									public getCenterX(): number;
									public getCenterY(): number;
									public getOpacity(): number;
									public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zza>;
									public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzb {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzb>;
									public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
									public onDraw(param0: globalAndroid.graphics.Canvas): void;
									public constructor(param0: globalAndroid.content.Context);
									public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
									public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
									public onMeasure(param0: number, param1: number): void;
									public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
									public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
									public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
									public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzc>;
									public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzd {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzd>;
									public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zze {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zze>;
									public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzf {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzf>;
									public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzg {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzg>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.internal.featurehighlight.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zzbi(): void;
										dismiss(): void;
									});
									public constructor();
									public dismiss(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzh {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzh>;
									public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzi {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzi>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.internal.featurehighlight.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										setText(param0: string, param1: string): void;
										asView(): globalAndroid.view.View;
									});
									public constructor();
									public setText(param0: string, param1: string): void;
									public asView(): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module internal {
							export module featurehighlight {
								export class zzj {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzj>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class CastMediaOptions {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.CastMediaOptions>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.CastMediaOptions>;
								public getMediaSessionEnabled(): boolean;
								public getMediaIntentReceiverClassName(): string;
								public getNotificationOptions(): com.google.android.gms.cast.framework.media.NotificationOptions;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getExpandedControllerActivityClassName(): string;
								public getImagePicker(): com.google.android.gms.cast.framework.media.ImagePicker;
							}
							export module CastMediaOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.CastMediaOptions.Builder>;
									public constructor();
									public build(): com.google.android.gms.cast.framework.media.CastMediaOptions;
									public setNotificationOptions(param0: com.google.android.gms.cast.framework.media.NotificationOptions): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
									public setImagePicker(param0: com.google.android.gms.cast.framework.media.ImagePicker): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
									public setMediaIntentReceiverClassName(param0: string): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
									public setMediaSessionEnabled(param0: boolean): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
									public setExpandedControllerActivityClassName(param0: string): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class ImageHints {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImageHints>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.ImageHints>;
								public getType(): number;
								public getHeightInPixels(): number;
								public constructor(param0: number, param1: number, param2: number);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getWidthInPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class ImagePicker {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImagePicker>;
								public static IMAGE_TYPE_UNKNOWN: number;
								public static IMAGE_TYPE_MEDIA_ROUTE_CONTROLLER_DIALOG_BACKGROUND: number;
								public static IMAGE_TYPE_NOTIFICATION_THUMBNAIL: number;
								public static IMAGE_TYPE_MINI_CONTROLLER_THUMBNAIL: number;
								public static IMAGE_TYPE_LOCK_SCREEN_BACKGROUND: number;
								public static IMAGE_TYPE_EXPANDED_CONTROLLER_BACKGROUND: number;
								public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: com.google.android.gms.cast.framework.media.ImageHints): com.google.android.gms.common.images.WebImage;
								public constructor();
								public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
							}
							export module ImagePicker {
								export class zza extends com.google.android.gms.cast.framework.media.zzb.zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImagePicker.zza>;
									public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class MediaIntentReceiver {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaIntentReceiver>;
								public static ACTION_TOGGLE_PLAYBACK: string;
								public static ACTION_SKIP_NEXT: string;
								public static ACTION_SKIP_PREV: string;
								public static ACTION_FORWARD: string;
								public static ACTION_REWIND: string;
								public static ACTION_STOP_CASTING: string;
								public static ACTION_DISCONNECT: string;
								public static EXTRA_SKIP_STEP_MS: string;
								public onReceiveOtherAction(param0: string, param1: globalAndroid.content.Intent): void;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public onReceiveActionSkipPrev(param0: com.google.android.gms.cast.framework.Session): void;
								public onReceiveActionRewind(param0: com.google.android.gms.cast.framework.Session, param1: number): void;
								public onReceiveActionForward(param0: com.google.android.gms.cast.framework.Session, param1: number): void;
								public onReceiveActionTogglePlayback(param0: com.google.android.gms.cast.framework.Session): void;
								public constructor();
								public onReceiveOtherAction(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.content.Intent): void;
								public onReceiveActionSkipNext(param0: com.google.android.gms.cast.framework.Session): void;
								public onReceiveActionMediaButton(param0: com.google.android.gms.cast.framework.Session, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class MediaNotificationService {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService>;
								public static ACTION_UPDATE_NOTIFICATION: string;
								public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
								public onCreate(): void;
								public static isNotificationOptionsValid(param0: com.google.android.gms.cast.framework.CastOptions): boolean;
								public constructor();
								public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
								public onDestroy(): void;
							}
							export module MediaNotificationService {
								export class zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService.zza>;
									public streamType: number;
									public constructor(param0: boolean, param1: number, param2: string, param3: string, param4: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, param5: boolean, param6: boolean);
								}
								export class zzb {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService.zzb>;
									public constructor(param0: com.google.android.gms.common.images.WebImage);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class MediaQueue {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue>;
								public registerCallback(param0: com.google.android.gms.cast.framework.media.MediaQueue.Callback): void;
								public clear(): void;
								public unregisterCallback(param0: com.google.android.gms.cast.framework.media.MediaQueue.Callback): void;
								public getItemIds(): native.Array<number>;
								public fetchMoreItemsRelativeToIndex(param0: number, param1: number, param2: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getItemCount(): number;
								public setCacheCapacity(param0: number): void;
								public itemIdAtIndex(param0: number): number;
								public reload(): void;
								public getItemAtIndex(param0: number, param1: boolean): com.google.android.gms.cast.MediaQueueItem;
								public indexOfItemWithId(param0: number): number;
								public getItemAtIndex(param0: number): com.google.android.gms.cast.MediaQueueItem;
							}
							export module MediaQueue {
								export class Callback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.Callback>;
									public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
									public constructor();
									public itemsInsertedInRange(param0: number, param1: number): void;
									public itemsReloaded(): void;
									public itemsRemovedAtIndexes(param0: native.Array<number>): void;
									public mediaQueueChanged(): void;
									public mediaQueueWillChange(): void;
								}
								export class zza extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.zza>;
									public constructor();
									public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue);
									public onStatusUpdated(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class MediaQueueArrayAdapter extends globalAndroid.widget.ArrayAdapter<com.google.android.gms.cast.MediaQueueItem> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueArrayAdapter>;
								public dispose(): void;
								public getItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
								public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
								public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue, param1: globalAndroid.content.Context, param2: number);
								public isEmpty(): boolean;
								public areAllItemsEnabled(): boolean;
								public hasStableIds(): boolean;
								public getCount(): number;
								public getItemId(param0: number): number;
								public isEnabled(param0: number): boolean;
							}
							export module MediaQueueArrayAdapter {
								export class zza extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueArrayAdapter.zza>;
									public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
									public itemsInsertedInRange(param0: number, param1: number): void;
									public itemsReloaded(): void;
									public itemsRemovedAtIndexes(param0: native.Array<number>): void;
									public mediaQueueChanged(): void;
									public mediaQueueWillChange(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export abstract class MediaQueueRecyclerViewAdapter<VH>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter<any>>;
								public dispose(): void;
								public getItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
								public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
								public getItemCount(): number;
								public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue);
								public getItemId(param0: number): number;
							}
							export module MediaQueueRecyclerViewAdapter {
								export class zza extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter.zza>;
									public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
									public itemsInsertedInRange(param0: number, param1: number): void;
									public itemsReloaded(): void;
									public itemsRemovedAtIndexes(param0: native.Array<number>): void;
									public mediaQueueChanged(): void;
									public mediaQueueWillChange(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class MediaUtils {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaUtils>;
								public static getImageUri(param0: com.google.android.gms.cast.MediaInfo, param1: number): globalAndroid.net.Uri;
								public static getImageUrl(param0: com.google.android.gms.cast.MediaInfo, param1: number): string;
								public static getTrackLanguage(param0: com.google.android.gms.cast.MediaTrack): java.util.Locale;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class NotificationAction {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationAction>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationAction>;
								public getAction(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getContentDescription(): string;
								public getIconResId(): number;
							}
							export module NotificationAction {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationAction.Builder>;
									public constructor();
									public setContentDescription(param0: string): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
									public setIconResId(param0: number): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
									public setAction(param0: string): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
									public build(): com.google.android.gms.cast.framework.media.NotificationAction;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export abstract class NotificationActionsProvider {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationActionsProvider>;
								public getCompactViewActionIndices(): native.Array<number>;
								public constructor(param0: globalAndroid.content.Context);
								public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
								public getApplicationContext(): globalAndroid.content.Context;
							}
							export module NotificationActionsProvider {
								export class zza extends com.google.android.gms.cast.framework.media.zzc.zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationActionsProvider.zza>;
									public getCompactViewActionIndices(): native.Array<number>;
									public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class NotificationOptions {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationOptions>;
								public static SKIP_STEP_TEN_SECONDS_IN_MS: number;
								public static SKIP_STEP_THIRTY_SECONDS_IN_MS: number;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationOptions>;
								public getForward30DrawableResId(): number;
								public getActions(): java.util.List<string>;
								public getRewindDrawableResId(): number;
								public getRewind10DrawableResId(): number;
								public getSmallIconDrawableResId(): number;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: java.util.List<string>, param1: native.Array<number>, param2: number, param3: string, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: globalAndroid.os.IBinder);
								public getSkipNextDrawableResId(): number;
								public getForward10DrawableResId(): number;
								public getCompatActionIndices(): native.Array<number>;
								public getSkipPrevDrawableResId(): number;
								public getStopLiveStreamDrawableResId(): number;
								public getCastingToDeviceStringResId(): number;
								public getForwardDrawableResId(): number;
								public getDisconnectDrawableResId(): number;
								public getSkipStepMs(): number;
								public getStopLiveStreamTitleResId(): number;
								public getTargetActivityClassName(): string;
								public getPauseDrawableResId(): number;
								public getPlayDrawableResId(): number;
								public getRewind30DrawableResId(): number;
							}
							export module NotificationOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationOptions.Builder>;
									public constructor();
									public setSmallIconDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setTargetActivityClassName(param0: string): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setSkipStepMs(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setPlayDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setSkipNextDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setRewindDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setNotificationActionsProvider(param0: com.google.android.gms.cast.framework.media.NotificationActionsProvider): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setRewind30DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setForward30DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setForwardDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public build(): com.google.android.gms.cast.framework.media.NotificationOptions;
									public setSkipPrevDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setPauseDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setStopLiveStreamDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setDisconnectDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setForward10DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setRewind10DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
									public setActions(param0: java.util.List<string>, param1: native.Array<number>): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class RemoteMediaClient extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient>;
								public static NAMESPACE: string;
								public static RESUME_STATE_UNCHANGED: number;
								public static RESUME_STATE_PLAY: number;
								public static RESUME_STATE_PAUSE: number;
								public static STATUS_SUCCEEDED: number;
								public static STATUS_FAILED: number;
								public static STATUS_REPLACED: number;
								public requestStatus(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public removeListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
								public setPlaybackRate(param0: number, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getApproximateStreamPosition(): number;
								public pause(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setStreamMute(param0: boolean, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public seek(param0: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setTextTrackStyle(param0: com.google.android.gms.cast.TextTrackStyle): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueRemoveItems(param0: native.Array<number>, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getLoadingItem(): com.google.android.gms.cast.MediaQueueItem;
								public seek(param0: number, param1: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getPreloadedItem(): com.google.android.gms.cast.MediaQueueItem;
								public queueAppendItem(param0: com.google.android.gms.cast.MediaQueueItem, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public addProgressListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener, param1: number): boolean;
								public pause(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getPlayerState(): number;
								public getApproximateAdBreakClipPositionMs(): number;
								public isBuffering(): boolean;
								public setPlaybackRate(param0: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public play(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueInsertItems(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public removeProgressListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener): void;
								public queueNext(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public isPaused(): boolean;
								public getStreamDuration(): number;
								public load(param0: com.google.android.gms.cast.MediaInfo, param1: boolean, param2: number, param3: native.Array<number>, param4: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueUpdateItems(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public load(param0: com.google.android.gms.cast.MediaInfo): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public load(param0: com.google.android.gms.cast.MediaInfo, param1: boolean, param2: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setStreamMute(param0: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueRemoveItem(param0: number, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueLoad(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>, param1: number, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueMoveItemToNewIndex(param0: number, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public isPlaying(): boolean;
								public registerCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback): void;
								public load(param0: com.google.android.gms.cast.MediaInfo, param1: boolean, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public togglePlayback(): void;
								public getCurrentItem(): com.google.android.gms.cast.MediaQueueItem;
								public isLiveStream(): boolean;
								public queueInsertAndPlayItem(param0: com.google.android.gms.cast.MediaQueueItem, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public stop(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setStreamVolume(param0: number): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueJumpToItem(param0: number, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setParseAdsInfoCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ParseAdsInfoCallback): void;
								public queueReorderItems(param0: native.Array<number>, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
								public getNamespace(): string;
								public constructor(param0: any /* com.google.android.gms.cast.internal.zzah*/);
								public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
								public setActiveMediaTracks(param0: native.Array<number>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public setStreamVolume(param0: number, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public skipAd(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getApproximateLiveSeekableRangeStart(): number;
								public unregisterCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback): void;
								public seek(param0: number, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public play(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queuePrev(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public addListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
								public isPlayingAd(): boolean;
								public queueInsertAndPlayItem(param0: com.google.android.gms.cast.MediaQueueItem, param1: number, param2: number, param3: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public stop(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
								public load(param0: com.google.android.gms.cast.MediaInfo, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public load(param0: com.google.android.gms.cast.MediaLoadRequestData): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public getApproximateLiveSeekableRangeEnd(): number;
								public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
								public isLoadingNextItem(): boolean;
								public getIdleReason(): number;
								public load(param0: com.google.android.gms.cast.MediaInfo, param1: com.google.android.gms.cast.MediaLoadOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueSetRepeatMode(param0: number, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public hasMediaSession(): boolean;
								public seek(param0: com.google.android.gms.cast.MediaSeekOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueJumpToItem(param0: number, param1: number, param2: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
								public queueLoad(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>, param1: number, param2: number, param3: number, param4: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
							}
							export module RemoteMediaClient {
								export class Callback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback>;
									public constructor();
									public onQueueStatusUpdated(): void;
									public onAdBreakStatusUpdated(): void;
									public onPreloadStatusUpdated(): void;
									public onMetadataUpdated(): void;
									public onSendingRemoteMediaRequest(): void;
									public onStatusUpdated(): void;
								}
								export class Listener {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onStatusUpdated(): void;
										onMetadataUpdated(): void;
										onQueueStatusUpdated(): void;
										onPreloadStatusUpdated(): void;
										onSendingRemoteMediaRequest(): void;
										onAdBreakStatusUpdated(): void;
									});
									public constructor();
									public onQueueStatusUpdated(): void;
									public onAdBreakStatusUpdated(): void;
									public onPreloadStatusUpdated(): void;
									public onMetadataUpdated(): void;
									public onSendingRemoteMediaRequest(): void;
									public onStatusUpdated(): void;
								}
								export class MediaChannelResult {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$MediaChannelResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getCustomData(): org.json.JSONObject;
										getMediaError(): com.google.android.gms.cast.MediaError;
									});
									public constructor();
									public getCustomData(): org.json.JSONObject;
									public getMediaError(): com.google.android.gms.cast.MediaError;
								}
								export class ParseAdsInfoCallback {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.ParseAdsInfoCallback>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$ParseAdsInfoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										parseIsPlayingAdFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): boolean;
										parseAdBreaksFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
									});
									public constructor();
									public parseIsPlayingAdFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): boolean;
									public parseAdBreaksFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
								}
								export class ProgressListener {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$ProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onProgressUpdated(param0: number, param1: number): void;
									});
									public constructor();
									public onProgressUpdated(param0: number, param1: number): void;
								}
								export class zza extends com.google.android.gms.cast.internal.zzan {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zza>;
									public constructor(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient);
								}
								export class zzb extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult> {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzb>;
								}
								export abstract class zzc extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult> {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc>;
								}
								export class zzd extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzd>;
									public getStatus(): com.google.android.gms.common.api.Status;
									public getCustomData(): org.json.JSONObject;
									public getMediaError(): com.google.android.gms.cast.MediaError;
								}
								export class zze {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zze>;
									public constructor(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient, param1: number);
									public start(): void;
									public isStarted(): boolean;
									public hasListener(): boolean;
									public stop(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class TracksChooserDialogFragment {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.TracksChooserDialogFragment>;
								public onDestroyView(): void;
								public static newInstance(param0: com.google.android.gms.cast.MediaInfo, param1: native.Array<number>): com.google.android.gms.cast.framework.media.TracksChooserDialogFragment;
								public static newInstance(): com.google.android.gms.cast.framework.media.TracksChooserDialogFragment;
								public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
								public constructor();
								public onCreate(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class ResourceProvider {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.ResourceProvider>;
									public constructor();
									public static findResourceByName(param0: string): java.lang.Integer;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zza extends com.google.android.gms.cast.framework.media.internal.zzd {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zza>;
									public constructor(param0: globalAndroid.content.Context);
									public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.framework.media.ImageHints);
									public clear(): void;
									public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzb extends globalAndroid.os.AsyncTask<globalAndroid.net.Uri,java.lang.Long,globalAndroid.graphics.Bitmap> {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzb>;
									public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.cast.framework.media.internal.zzd*/);
									public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: boolean, param4: any /* com.google.android.gms.cast.framework.media.internal.zzd*/);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzc>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.internal.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zza(param0: globalAndroid.graphics.Bitmap): void;
									});
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzd {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzd>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.internal.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
									});
									public constructor();
									public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zze {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zze>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzf extends com.google.android.gms.cast.framework.media.internal.zzl {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzf>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzg {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzg>;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzh {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzh>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.internal.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zzb(param0: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
									});
									public constructor();
								}
								export module zzh {
									export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.internal.zzh {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzh.zza>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzi {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzi>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.internal.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zzac(): number;
										zza(param0: number, param1: number): void;
									});
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzj extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.media.internal.zzh {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzj>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzk extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzk>;
									public onQueueStatusUpdated(): void;
									public onAdBreakStatusUpdated(): void;
									public onPreloadStatusUpdated(): void;
									public onMetadataUpdated(): void;
									public onSendingRemoteMediaRequest(): void;
									public onStatusUpdated(): void;
									public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.framework.CastOptions, param2: any /* com.google.android.gms.internal.cast.zzax*/);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export abstract class zzl extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.internal.zzi {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzl>;
									public constructor(param0: string);
									public constructor();
									public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzm extends com.google.android.gms.cast.framework.media.internal.zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzm>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzn {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzn>;
									public run(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzo {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzo>;
									public onMediaButtonEvent(param0: globalAndroid.content.Intent): boolean;
									public onPause(): void;
									public onPlay(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzp extends com.google.android.gms.cast.framework.media.internal.zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzp>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module internal {
								export class zzq {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.internal.zzq>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class UIController {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.UIController>;
									public constructor();
									public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
									public onSendingRemoteMediaRequest(): void;
									public onSessionEnded(): void;
									public onMediaStatusUpdated(): void;
									public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class UIMediaController extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.UIMediaController>;
									public bindImageViewToPlayPauseToggle(param0: globalAndroid.widget.ImageView, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable, param4: globalAndroid.view.View, param5: boolean): void;
									public onSessionStarted(param0: any, param1: string): void;
									public onSessionResumeFailed(param0: any, param1: number): void;
									public bindTextViewToMetadataOfPreloadedItem(param0: globalAndroid.widget.TextView, param1: java.util.List<string>): void;
									public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: com.google.android.gms.cast.framework.media.ImageHints, param2: globalAndroid.view.View): void;
									public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: com.google.android.gms.cast.framework.media.ImageHints, param2: number): void;
									public onSeekBarStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
									public bindViewToForward(param0: globalAndroid.view.View, param1: number): void;
									public bindSeekBar(param0: globalAndroid.widget.SeekBar): void;
									public onSessionResumed(param0: com.google.android.gms.cast.framework.CastSession, param1: boolean): void;
									public bindTextViewToStreamPosition(param0: globalAndroid.widget.TextView, param1: boolean, param2: number): void;
									public onSessionStartFailed(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
									public onLaunchExpandedControllerClicked(param0: globalAndroid.view.View): void;
									public onQueueStatusUpdated(): void;
									public onSkipNextClicked(param0: globalAndroid.view.View): void;
									public onMetadataUpdated(): void;
									public bindImageViewToImageOfPreloadedItem(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
									public onSendingRemoteMediaRequest(): void;
									public bindViewToSkipPrev(param0: globalAndroid.view.View, param1: number): void;
									public bindImageViewToImageOfPreloadedItem(param0: globalAndroid.widget.ImageView, param1: com.google.android.gms.cast.framework.media.ImageHints, param2: number): void;
									public onForwardClicked(param0: globalAndroid.view.View, param1: number): void;
									public onSessionEnding(param0: any): void;
									public bindProgressBar(param0: globalAndroid.widget.ProgressBar): void;
									public onSessionEnding(param0: com.google.android.gms.cast.framework.CastSession): void;
									public onSeekBarProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
									public onAdBreakStatusUpdated(): void;
									public setPostRemoteMediaClientListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
									public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
									public onSessionStarted(param0: com.google.android.gms.cast.framework.CastSession, param1: string): void;
									public bindViewToSkipNext(param0: globalAndroid.view.View, param1: number): void;
									public onSessionStarting(param0: any): void;
									public bindProgressBar(param0: globalAndroid.widget.ProgressBar, param1: number): void;
									public bindViewVisibilityToMediaSession(param0: globalAndroid.view.View, param1: number): void;
									public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: number, param2: globalAndroid.view.View): void;
									public bindViewToLaunchExpandedController(param0: globalAndroid.view.View): void;
									public constructor(param0: globalAndroid.app.Activity);
									public bindSeekBar(param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar, param1: number): void;
									public onStatusUpdated(): void;
									public onSkipPrevClicked(param0: globalAndroid.view.View): void;
									public onSessionResumed(param0: any, param1: boolean): void;
									public bindTextViewToMetadataOfCurrentItem(param0: globalAndroid.widget.TextView, param1: java.util.List<string>): void;
									public bindTextViewToStreamDuration(param0: globalAndroid.widget.TextView, param1: globalAndroid.view.View): void;
									public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
									public bindViewVisibilityToPreloadingEvent(param0: globalAndroid.view.View, param1: number): void;
									public onSeekBarStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
									public bindSeekBar(param0: globalAndroid.widget.SeekBar, param1: number): void;
									public onSessionResuming(param0: any, param1: string): void;
									public onClosedCaptionClicked(param0: globalAndroid.view.View): void;
									public bindTextViewToStreamDuration(param0: globalAndroid.widget.TextView): void;
									public bindViewToLoadingIndicator(param0: globalAndroid.view.View): void;
									public bindTextViewToStreamPosition(param0: globalAndroid.widget.TextView, param1: boolean): void;
									public onSessionStarting(param0: com.google.android.gms.cast.framework.CastSession): void;
									public bindTextViewToMetadataOfCurrentItem(param0: globalAndroid.widget.TextView, param1: string): void;
									public bindViewToClosedCaption(param0: globalAndroid.view.View): void;
									public onRewindClicked(param0: globalAndroid.view.View, param1: number): void;
									public onSessionSuspended(param0: any, param1: number): void;
									public bindTextViewToMetadataOfPreloadedItem(param0: globalAndroid.widget.TextView, param1: string): void;
									public onMuteToggleClicked(param0: globalAndroid.widget.ImageView): void;
									public onSessionResumeFailed(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
									public onSessionResuming(param0: com.google.android.gms.cast.framework.CastSession, param1: string): void;
									public bindImageViewToMuteToggle(param0: globalAndroid.widget.ImageView): void;
									public dispose(): void;
									public onSessionEnded(param0: any, param1: number): void;
									public isActive(): boolean;
									public bindViewToRewind(param0: globalAndroid.view.View, param1: number): void;
									public onPreloadStatusUpdated(): void;
									public onSessionStartFailed(param0: any, param1: number): void;
									public bindViewToUIController(param0: globalAndroid.view.View, param1: com.google.android.gms.cast.framework.media.uicontroller.UIController): void;
									public onSessionEnded(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
									public bindSeekBar(param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar): void;
									public onPlayPauseToggleClicked(param0: globalAndroid.widget.ImageView): void;
									public bindTextViewToSmartSubtitle(param0: globalAndroid.widget.TextView): void;
									public onSessionSuspended(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zza>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzb {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzb>;
									public getMaxProgress(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzc extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzc>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzd {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzd>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zze {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zze>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzf {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzf>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzg {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzg>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzh {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzh>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzi extends com.google.android.gms.cast.framework.media.widget.CastSeekBar.zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzi>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzj {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzj>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzk {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzk>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzl {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzl>;
									public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
									public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
									public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module uicontroller {
								export class zzm {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzm>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class CastSeekBar {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar>;
									public getMaxProgress(): number;
									public setAdBreaks(param0: any /* java.util.List<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzb>*/): void;
									public onDraw(param0: globalAndroid.graphics.Canvas): void;
									public constructor(param0: globalAndroid.content.Context);
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
									public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
									public getProgress(): number;
									public onMeasure(param0: number, param1: number): void;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
									public onDetachedFromWindow(): void;
								}
								export module CastSeekBar {
									export class zza {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zza>;
										public constructor();
									}
									export class zzb {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzb>;
										public progress: number;
										public equals(param0: any): boolean;
										public hashCode(): number;
										public constructor(param0: number);
									}
									export class zzc {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzc>;
										public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
										public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
										public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
									}
									export class zzd {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzd>;
										public equals(param0: any): boolean;
										public hashCode(): number;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class ControlButtonsContainer {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer>;
									/**
									 * Constructs a new instance of the com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getButtonSlotCount(): number;
										getButtonTypeAt(param0: number): number;
										getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
										getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
									});
									public constructor();
									public getButtonTypeAt(param0: number): number;
									public getButtonSlotCount(): number;
									public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
									public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class ExpandedControllerActivity extends androidx.appcompat.app.AppCompatActivity implements com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity>;
									public constructor();
									public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
									public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
									public constructor(param0: number);
									public onWindowFocusChanged(param0: boolean): void;
									public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
									public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
									public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
									public getStatusTextView(): globalAndroid.widget.TextView;
									public onPause(): void;
									public getButtonTypeAt(param0: number): number;
									public onResume(): void;
									public onCreate(param0: globalAndroid.os.Bundle): void;
									public getButtonSlotCount(): number;
									public getSeekBar(): globalAndroid.widget.SeekBar;
									public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
									public onDestroy(): void;
									public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
								}
								export module ExpandedControllerActivity {
									export class zza extends com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.CastSession> {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.zza>;
										public onSessionResumeFailed(param0: any, param1: number): void;
										public onSessionResuming(param0: any, param1: string): void;
										public onSessionResumed(param0: any, param1: boolean): void;
										public onSessionStartFailed(param0: any, param1: number): void;
										public onSessionSuspended(param0: any, param1: number): void;
										public onSessionStarted(param0: any, param1: string): void;
										public onSessionEnding(param0: any): void;
										public onSessionStarting(param0: any): void;
										public onSessionEnded(param0: any, param1: number): void;
									}
									export class zzb extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener {
										public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.zzb>;
										public onSendingRemoteMediaRequest(): void;
										public onStatusUpdated(): void;
										public onAdBreakStatusUpdated(): void;
										public onMetadataUpdated(): void;
										public onQueueStatusUpdated(): void;
										public onPreloadStatusUpdated(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class MiniControllerFragment implements com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.MiniControllerFragment>;
									public constructor();
									public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
									public getButtonTypeAt(param0: number): number;
									public getButtonSlotCount(): number;
									public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
									public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
									public onDestroy(): void;
									public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zza {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zza>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zzb {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzb>;
									public run(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzc>;
									public onClick(param0: globalAndroid.view.View): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zzd extends com.google.android.gms.cast.framework.media.internal.zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzd>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zze {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zze>;
									public run(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zzf {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzf>;
									public run(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export module widget {
								export class zzg {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzg>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.CastMediaOptions> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zza>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaa extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaa>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzab extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzab>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzac extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzac>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzad extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzad>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzae extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzae>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaf extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaf>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzag extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzag>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzah extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzah>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzai extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzai>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaj extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaj>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzak extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzak>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzal extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzal>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzam extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzam>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzan extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzan>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzao extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzao>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzap extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzap>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaq extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaq>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzar extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzar>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzas extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzas>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzat extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzat>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzau extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzau>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzav extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzav>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaw extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaw>;
								public getMediaError(): com.google.android.gms.cast.MediaError;
								public getStatus(): com.google.android.gms.common.api.Status;
								public getCustomData(): org.json.JSONObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzax extends com.google.android.gms.cast.internal.zzam {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzax>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzay extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzay>;
								public getMediaError(): com.google.android.gms.cast.MediaError;
								public getStatus(): com.google.android.gms.common.api.Status;
								public getCustomData(): org.json.JSONObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzaz {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaz>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzb>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.framework.media.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzac(): number;
									onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
									zzbr(): com.google.android.gms.dynamic.IObjectWrapper;
									zza(param0: com.google.android.gms.cast.MediaMetadata, param1: com.google.android.gms.cast.framework.media.ImageHints): com.google.android.gms.common.images.WebImage;
								});
								public constructor();
								public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
							}
							export module zzb {
								export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.zzb {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzb.zza>;
									public constructor(param0: string);
									public constructor();
									public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
									public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzba {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzba>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzbb {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbb>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzbc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbc>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzbd extends globalAndroid.widget.ArrayAdapter<com.google.android.gms.cast.MediaTrack> implements globalAndroid.view.View.OnClickListener  {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbd>;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.google.android.gms.cast.MediaTrack>, param2: number);
								public onClick(param0: globalAndroid.view.View): void;
								public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzbe {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbe>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzc>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.framework.media.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzac(): number;
									zzbr(): com.google.android.gms.dynamic.IObjectWrapper;
									getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
									getCompactViewActionIndices(): native.Array<number>;
								});
								public constructor();
								public getCompactViewActionIndices(): native.Array<number>;
								public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
							}
							export module zzc {
								export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.zzc {
									public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzc.zza>;
									public constructor(param0: string);
									public constructor();
									public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public getCompactViewActionIndices(): native.Array<number>;
									public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzd extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.media.zzb {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzd>;
								public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zze extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.media.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zze>;
								public getCompactViewActionIndices(): native.Array<number>;
								public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.ImageHints> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzf>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzg {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzg>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzh {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzh>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzi extends com.google.android.gms.cast.framework.media.internal.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzi>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzj {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzj>;
								public onResult(param0: com.google.android.gms.common.api.Result): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzk {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzk>;
								public onResult(param0: com.google.android.gms.common.api.Result): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzl extends globalAndroid.util.LruCache<java.lang.Integer,com.google.android.gms.cast.MediaQueueItem> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzl>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzm {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzm>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzn {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzo {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzo>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzp extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationAction> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzp>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzq {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzr extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationOptions> {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzr>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzs extends com.google.android.gms.cast.internal.zzai {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzs>;
								public onQueueStatusUpdated(): void;
								public onPreloadStatusUpdated(): void;
								public onAdBreakStatusUpdated(): void;
								public onStatusUpdated(): void;
								public onMetadataUpdated(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzt extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzt>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzu extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzu>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzv extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzv>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzw extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzw>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzx extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzx>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzy extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzy>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export module media {
							export class zzz extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzz>;
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zza>;
							public apply(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class zzaa extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzx {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzaa>;
							public constructor();
							public getCategory(): string;
							public constructor(param0: string);
							public isSessionRecoverable(): boolean;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class zzab extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzz {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzab>;
							public constructor();
							public onResuming(param0: globalAndroid.os.Bundle): void;
							public getSessionRemainingTimeMs(): number;
							public constructor(param0: string);
							public onStarting(param0: globalAndroid.os.Bundle): void;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public end(param0: boolean): void;
							public resume(param0: globalAndroid.os.Bundle): void;
							public start(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzad<T>  extends java.lang.Object /* com.google.android.gms.cast.framework.zzy*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzad<any>>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.cast.framework.SessionManagerListener<any>, param1: java.lang.Class<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzae {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzb>;
							public onSuccess(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.CastOptions> {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zze extends com.google.android.gms.cast.framework.zzo {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zze>;
							public constructor();
							public constructor(param0: com.google.android.gms.cast.framework.CastStateListener);
							public constructor(param0: string);
							public onCastStateChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zzd(param0: string, param1: string): void;
								zzb(param0: string, param1: com.google.android.gms.cast.LaunchOptions): void;
								zzn(param0: string): void;
								zzq(param0: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzh {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzaf(): globalAndroid.os.Bundle;
								zzag(): any /* com.google.android.gms.cast.framework.zzt*/;
								zzah(): any /* com.google.android.gms.cast.framework.zzn*/;
								zza(param0: string, param1: java.util.Map): void;
								zzy(): boolean;
							});
							public constructor();
						}
						export module zzh {
							export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzh {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.zzh.zza>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class zzi extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzf {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzi>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzj extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzh {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(param0: globalAndroid.os.Bundle): void;
								onConnectionSuspended(param0: number): void;
								onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								zza(param0: com.google.android.gms.cast.ApplicationMetadata, param1: string, param2: string, param3: boolean): void;
								zzh(param0: number): void;
								zza(param0: boolean, param1: number): void;
							});
							public constructor();
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
						export module zzk {
							export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzk {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.zzk.zza>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zzad(): com.google.android.gms.dynamic.IObjectWrapper;
								onCastStateChanged(param0: number): void;
							});
							public constructor();
							public onCastStateChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzm extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzk {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzm>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzn {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzai(): com.google.android.gms.dynamic.IObjectWrapper;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class zzo extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzl {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzo>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onCastStateChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCreate(): void;
								onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
								onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
								onDestroy(): void;
							});
							public constructor();
							public onCreate(): void;
							public onDestroy(): void;
							public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						}
						export module zzp {
							export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzp {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.zzp.zza>;
								public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
								public onCreate(): void;
								public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzq extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzn {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzr extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzp {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzr>;
							public onCreate(): void;
							public onDestroy(): void;
							public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzs {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzaj(): com.google.android.gms.dynamic.IObjectWrapper;
								getCategory(): string;
								getSessionId(): string;
								isConnected(): boolean;
								isConnecting(): boolean;
								isDisconnecting(): boolean;
								isDisconnected(): boolean;
								isResuming(): boolean;
								isSuspended(): boolean;
								notifySessionStarted(param0: string): void;
								notifyFailedToStartSession(param0: number): void;
								notifySessionEnded(param0: number): void;
								notifySessionResumed(param0: boolean): void;
								notifyFailedToResumeSession(param0: number): void;
								notifySessionSuspended(param0: number): void;
							});
							public constructor();
							public isResuming(): boolean;
							public notifySessionEnded(param0: number): void;
							public notifySessionStarted(param0: string): void;
							public isDisconnecting(): boolean;
							public isConnected(): boolean;
							public notifyFailedToResumeSession(param0: number): void;
							public isDisconnected(): boolean;
							public isConnecting(): boolean;
							public getCategory(): string;
							public isSuspended(): boolean;
							public getSessionId(): string;
							public notifySessionResumed(param0: boolean): void;
							public notifyFailedToStartSession(param0: number): void;
							public notifySessionSuspended(param0: number): void;
						}
						export module zzs {
							export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzs {
								public static class: java.lang.Class<com.google.android.gms.cast.framework.zzs.zza>;
								public isResuming(): boolean;
								public isSuspended(): boolean;
								public getSessionId(): string;
								public isDisconnecting(): boolean;
								public notifySessionResumed(param0: boolean): void;
								public notifySessionSuspended(param0: number): void;
								public notifySessionEnded(param0: number): void;
								public isConnected(): boolean;
								public getCategory(): string;
								public notifyFailedToResumeSession(param0: number): void;
								public isDisconnected(): boolean;
								public isConnecting(): boolean;
								public notifySessionStarted(param0: string): void;
								public notifyFailedToStartSession(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzt {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzak(): com.google.android.gms.dynamic.IObjectWrapper;
								zza(param0: any /* com.google.android.gms.cast.framework.zzv*/): void;
								zzb(param0: any /* com.google.android.gms.cast.framework.zzv*/): void;
								zza(param0: any /* com.google.android.gms.cast.framework.zzl*/): void;
								zzb(param0: any /* com.google.android.gms.cast.framework.zzl*/): void;
								zza(param0: boolean, param1: boolean): void;
								zzai(): com.google.android.gms.dynamic.IObjectWrapper;
								getCastState(): number;
								zzd(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public getCastState(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzu extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzs {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzu>;
							public isResuming(): boolean;
							public notifySessionEnded(param0: number): void;
							public notifySessionStarted(param0: string): void;
							public isDisconnecting(): boolean;
							public isConnected(): boolean;
							public notifyFailedToResumeSession(param0: number): void;
							public isDisconnected(): boolean;
							public isConnecting(): boolean;
							public getCategory(): string;
							public isSuspended(): boolean;
							public getSessionId(): string;
							public notifySessionResumed(param0: boolean): void;
							public notifyFailedToStartSession(param0: number): void;
							public notifySessionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzv {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zzad(): com.google.android.gms.dynamic.IObjectWrapper;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: boolean): void;
								zzc(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zzd(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzw extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzt {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzw>;
							public getCastState(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zzo(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
								isSessionRecoverable(): boolean;
								getCategory(): string;
							});
							public constructor();
							public getCategory(): string;
							public isSessionRecoverable(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export abstract class zzy extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzv {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzy>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module framework {
						export class zzz {
							public static class: java.lang.Class<com.google.android.gms.cast.framework.zzz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.framework.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zzal(): com.google.android.gms.dynamic.IObjectWrapper;
								onStarting(param0: globalAndroid.os.Bundle): void;
								start(param0: globalAndroid.os.Bundle): void;
								onResuming(param0: globalAndroid.os.Bundle): void;
								resume(param0: globalAndroid.os.Bundle): void;
								end(param0: boolean): void;
								getSessionRemainingTimeMs(): number;
							});
							public constructor();
							public onResuming(param0: globalAndroid.os.Bundle): void;
							public getSessionRemainingTimeMs(): number;
							public onStarting(param0: globalAndroid.os.Bundle): void;
							public end(param0: boolean): void;
							public resume(param0: globalAndroid.os.Bundle): void;
							public start(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module games {
						export class GameManagerClient {
							public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient>;
							public static STATUS_INCORRECT_VERSION: number;
							public static STATUS_TOO_MANY_PLAYERS: number;
							public static PLAYER_STATE_UNKNOWN: number;
							public static PLAYER_STATE_DROPPED: number;
							public static PLAYER_STATE_QUIT: number;
							public static PLAYER_STATE_AVAILABLE: number;
							public static PLAYER_STATE_READY: number;
							public static PLAYER_STATE_IDLE: number;
							public static PLAYER_STATE_PLAYING: number;
							public static LOBBY_STATE_UNKNOWN: number;
							public static LOBBY_STATE_OPEN: number;
							public static LOBBY_STATE_CLOSED: number;
							public static GAMEPLAY_STATE_UNKNOWN: number;
							public static GAMEPLAY_STATE_LOADING: number;
							public static GAMEPLAY_STATE_RUNNING: number;
							public static GAMEPLAY_STATE_PAUSED: number;
							public static GAMEPLAY_STATE_SHOWING_INFO_SCREEN: number;
							public static getInstanceFor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult>;
							public sendGameMessage(param0: string, param1: org.json.JSONObject): void;
							public sendPlayerPlayingRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerQuitRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public dispose(): void;
							public sendGameMessage(param0: org.json.JSONObject): void;
							public getCurrentState(): com.google.android.gms.cast.games.GameManagerState;
							public isDisposed(): boolean;
							public getLastUsedPlayerId(): string;
							public sendPlayerPlayingRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerQuitRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerIdleRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerAvailableRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendGameRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public setSessionLabel(param0: string): void;
							public sendPlayerAvailableRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerReadyRequest(param0: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerIdleRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public setListener(param0: com.google.android.gms.cast.games.GameManagerClient.Listener): void;
							public sendGameRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
							public sendPlayerReadyRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
						}
						export module GameManagerClient {
							export class GameManagerInstanceResult {
								public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$GameManagerInstanceResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
								});
								public constructor();
								public getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
							}
							export class GameManagerResult {
								public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$GameManagerResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getPlayerId(): string;
									getRequestId(): number;
									getExtraMessageData(): org.json.JSONObject;
								});
								public constructor();
								public getPlayerId(): string;
								public getRequestId(): number;
								public getExtraMessageData(): org.json.JSONObject;
							}
							export class Listener {
								public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.Listener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onStateChanged(param0: com.google.android.gms.cast.games.GameManagerState, param1: com.google.android.gms.cast.games.GameManagerState): void;
									onGameMessageReceived(param0: string, param1: org.json.JSONObject): void;
								});
								public constructor();
								public onGameMessageReceived(param0: string, param1: org.json.JSONObject): void;
								public onStateChanged(param0: com.google.android.gms.cast.games.GameManagerState, param1: com.google.android.gms.cast.games.GameManagerState): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module games {
						export class GameManagerState {
							public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerState>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLobbyState(): number;
								getGameplayState(): number;
								getGameData(): org.json.JSONObject;
								getGameStatusText(): string;
								getApplicationName(): string;
								getMaxPlayers(): number;
								getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
								getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
								getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
								getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
								getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
								getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
								hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
								hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
								getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
							});
							public constructor();
							public hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
							public getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getGameplayState(): number;
							public getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
							public hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public getGameData(): org.json.JSONObject;
							public getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
							public getGameStatusText(): string;
							public getApplicationName(): string;
							public getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public getLobbyState(): number;
							public getMaxPlayers(): number;
							public hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module games {
						export class PlayerInfo {
							public static class: java.lang.Class<com.google.android.gms.cast.games.PlayerInfo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.games.PlayerInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPlayerState(): number;
								getPlayerData(): org.json.JSONObject;
								getPlayerId(): string;
								isConnected(): boolean;
								isControllable(): boolean;
							});
							public constructor();
							public getPlayerState(): number;
							public getPlayerData(): org.json.JSONObject;
							public isConnected(): boolean;
							public isControllable(): boolean;
							public getPlayerId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class CastUtils {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.CastUtils>;
							public static secToMillisec(param0: number): number;
							public static jsonStringToJsonObject(param0: string): org.json.JSONObject;
							public static throwIfInvalidNamespace(param0: string): void;
							public static toLongArraySafely(param0: org.json.JSONArray): native.Array<number>;
							public static millisecToSec(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class Logger {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.Logger>;
							public v(param0: string, param1: native.Array<any>): void;
							public i(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
							public i(param0: string, param1: native.Array<any>): void;
							public w(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
							public e(param0: string, param1: native.Array<any>): void;
							public constructor(param0: string);
							public d(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
							public e(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
							public w(param0: string, param1: native.Array<any>): void;
							public d(param0: string, param1: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export module media {
							export class MediaCommon {
								public static class: java.lang.Class<com.google.android.gms.cast.internal.media.MediaCommon>;
								public static mediaRepeatModeFromString(param0: string): java.lang.Integer;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export module media {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.cast.internal.media.zza>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zza extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.internal.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export abstract class zzaa extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.internal.zzx {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzaa>;
							public constructor();
							public onResult(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzab {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzab>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: number): void;
								zza(param0: com.google.android.gms.cast.ApplicationMetadata, param1: string, param2: string, param3: boolean): void;
								zzh(param0: number): void;
								zza(param0: string, param1: number, param2: boolean): void;
								zzc(param0: string, param1: string): void;
								zza(param0: string, param1: native.Array<number>): void;
								zzj(param0: number): void;
								zzi(param0: number): void;
								onApplicationDisconnected(param0: number): void;
								zza(param0: string, param1: number, param2: number): void;
								zza(param0: string, param1: number): void;
								zzb(param0: any /* com.google.android.gms.cast.internal.zzb*/): void;
								zzb(param0: any /* com.google.android.gms.cast.internal.zzu*/): void;
								zzf(param0: number): void;
								zzg(param0: number): void;
							});
							public constructor();
							public onApplicationDisconnected(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzac extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.internal.zzz {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzac>;
							public requestStatus(): void;
							public disconnect(): void;
							public connect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: native.Array<string>, param2: string, param3: any /* java.util.List<com.google.android.gms.cast.zzcz>*/): void;
								zza(param0: any /* com.google.android.gms.cast.internal.zzx*/, param1: native.Array<string>): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export abstract class zzae extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.internal.zzab {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzae>;
							public constructor();
							public onApplicationDisconnected(param0: number): void;
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzaf {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzag extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.internal.zzad {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzag>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzah extends com.google.android.gms.cast.internal.zzc {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzah>;
							public static NAMESPACE: string;
							public getApproximateLiveSeekableRangeEnd(): number;
							public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
							public getApproximateAdBreakClipPositionMs(): number;
							public constructor(param0: string);
							public getApproximateStreamPosition(): number;
							public constructor(param0: string, param1: string, param2: string);
							public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
							public getApproximateLiveSeekableRangeStart(): number;
							public getStreamDuration(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzai {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzai>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzai interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStatusUpdated(): void;
								onMetadataUpdated(): void;
								onQueueStatusUpdated(): void;
								onPreloadStatusUpdated(): void;
								onAdBreakStatusUpdated(): void;
								zza(param0: native.Array<number>): void;
								zza(param0: native.Array<number>, param1: number): void;
								zzb(param0: native.Array<number>): void;
								zzc(param0: native.Array<number>): void;
								zza(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>): void;
							});
							public constructor();
							public onAdBreakStatusUpdated(): void;
							public onStatusUpdated(): void;
							public onMetadataUpdated(): void;
							public onPreloadStatusUpdated(): void;
							public onQueueStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzaj extends com.google.android.gms.cast.internal.zzam {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzaj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzak {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzak>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzal>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: number, param2: any): void;
								zzb(param0: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzan>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: string, param1: string, param2: number, param3: string): void;
								zzv(): number;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzao>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzap {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzap>;
							public test(param0: number): boolean;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.internal.zzb>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzc extends com.google.android.gms.cast.internal.zzk {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzc>;
							public constructor(param0: string, param1: string, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export abstract class zzd<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.cast.internal.zzn>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzd<any>>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zze>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzf extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzf>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzg extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.cast.internal.zzl,java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzh extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.cast.internal.zzl,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzi extends com.google.android.gms.cast.internal.zzaa {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzi>;
							public onResult(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzj>;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzk>;
							public setSessionLabel(param0: string): void;
							public constructor(param0: string, param1: string, param2: string);
							public getNamespace(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzl extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.cast.internal.zzad>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzl>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public getServiceDescriptor(): string;
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzm extends com.google.android.gms.cast.Cast.ApplicationConnectionResult {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzm>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.cast.ApplicationMetadata, param2: string, param3: string, param4: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public getSessionId(): string;
							public getApplicationStatus(): string;
							public getWasLaunched(): boolean;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzn extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.cast.internal.zzz>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzn>;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public setVolume(param0: number): void;
							public disconnect(): void;
							public getStartServiceAction(): string;
							public getServiceDescriptor(): string;
							public getVolume(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.cast.CastDevice, param4: number, param5: com.google.android.gms.cast.Cast.Listener, param6: globalAndroid.os.Bundle, param7: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param8: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
							public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
							public requestStatus(): void;
							public isMute(): boolean;
							public removeMessageReceivedCallbacks(param0: string): void;
							public setMute(param0: boolean): void;
							public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
							public getStandbyState(): number;
							public getMinApkVersion(): number;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public getApplicationStatus(): string;
							public getActiveInputState(): number;
							public getConnectionHint(): globalAndroid.os.Bundle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzo {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzo>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzp extends com.google.android.gms.cast.internal.zzae {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzp>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.cast.internal.zzn*/);
							public onApplicationDisconnected(param0: number): void;
							public constructor(param0: string);
							public isDisposed(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzq {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzq>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzr {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzr>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzs extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.cast.internal.zzz>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzs>;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public disconnect(): void;
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public getServiceDescriptor(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.cast.CastDevice, param4: number, param5: globalAndroid.os.Bundle, param6: string, param7: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param8: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzt {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzt>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzu {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzu>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.internal.zzu>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getStandbyState(): number;
							public getVolume(): number;
							public equals(param0: any): boolean;
							public getActiveInputState(): number;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzv {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzv>;
							public static initialize(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.internal.zzu>*/ {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public onResult(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzy extends com.google.android.gms.cast.internal.zzd<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzy>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export module internal {
						export class zzz {
							public static class: java.lang.Class<com.google.android.gms.cast.internal.zzz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.cast.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								disconnect(): void;
								zzfd(): void;
								zzn(param0: string): void;
								requestStatus(): void;
								zza(param0: number, param1: number, param2: boolean): void;
								zza(param0: boolean, param1: number, param2: boolean): void;
								zza(param0: string, param1: string, param2: number): void;
								zzac(param0: string): void;
								zzad(param0: string): void;
								zzd(param0: string, param1: com.google.android.gms.cast.LaunchOptions): void;
								zza(param0: string, param1: string, param2: any /* com.google.android.gms.cast.zzbg*/): void;
								zzb(param0: string, param1: string, param2: number, param3: string): void;
								connect(): void;
								zzb(param0: any /* com.google.android.gms.cast.internal.zzab*/): void;
								zzfe(): void;
							});
							public constructor();
							public requestStatus(): void;
							public disconnect(): void;
							public connect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakClipInfo> {
						public static class: java.lang.Class<com.google.android.gms.cast.zza>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaa {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaa>;
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzab extends com.google.android.gms.tasks.OnCompleteListener<globalAndroid.view.Display> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzab>;
						public onComplete(param0: com.google.android.gms.tasks.Task<globalAndroid.view.Display>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzac {
						public static class: java.lang.Class<com.google.android.gms.cast.zzac>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzad extends com.google.android.gms.tasks.OnCompleteListener<java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzad>;
						public onComplete(param0: com.google.android.gms.tasks.Task<java.lang.Void>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzae extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzaf>*/ {
						public static class: java.lang.Class<com.google.android.gms.cast.zzae>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaf {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaf>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzaf>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzag extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzah>*/ {
						public static class: java.lang.Class<com.google.android.gms.cast.zzag>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzah {
						public static class: java.lang.Class<com.google.android.gms.cast.zzah>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzah>*/;
						public constructor(param0: any /* com.google.android.gms.cast.zzaf*/, param1: any /* com.google.android.gms.cast.zzaf*/);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzai {
						public static class: java.lang.Class<com.google.android.gms.cast.zzai>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaj {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaj>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzak extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.cast.Cast.CastOptions> implements any /* com.google.android.gms.cast.zzn*/  {
						public static class: java.lang.Class<com.google.android.gms.cast.zzak>;
						public isMute(): boolean;
						public getActiveInputState(): number;
						public getStandbyState(): number;
						public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						public getVolume(): number;
						public getApplicationStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzal {
						public static class: java.lang.Class<com.google.android.gms.cast.zzal>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzam {
						public static class: java.lang.Class<com.google.android.gms.cast.zzam>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzan {
						public static class: java.lang.Class<com.google.android.gms.cast.zzan>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzao {
						public static class: java.lang.Class<com.google.android.gms.cast.zzao>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzap {
						public static class: java.lang.Class<com.google.android.gms.cast.zzap>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaq {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaq>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzar {
						public static class: java.lang.Class<com.google.android.gms.cast.zzar>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzas {
						public static class: java.lang.Class<com.google.android.gms.cast.zzas>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzat {
						public static class: java.lang.Class<com.google.android.gms.cast.zzat>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzau {
						public static class: java.lang.Class<com.google.android.gms.cast.zzau>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzav extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.cast.internal.zzs,com.google.android.gms.cast.Cast.CastOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzav>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaw {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaw>;
						public accept(param0: any, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzax {
						public static class: java.lang.Class<com.google.android.gms.cast.zzax>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzay extends com.google.android.gms.cast.internal.zzae {
						public static class: java.lang.Class<com.google.android.gms.cast.zzay>;
						public onApplicationDisconnected(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzaz {
						public static class: java.lang.Class<com.google.android.gms.cast.zzaz>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakInfo> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzba {
						public static class: java.lang.Class<com.google.android.gms.cast.zzba>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbb>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbc {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbc>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbd {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbd>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbe {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbe>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbf extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzbg>*/ {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbf>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbg {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbg>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzbg>*/;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbh extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.LaunchOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbh>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbi extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaError> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbi>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaInfo> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbj>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbk extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaLiveSeekableRange> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbk>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbl {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbm {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaLoadRequestData> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbn>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbo extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaMetadata> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbo>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbp {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueContainerMetadata> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbq>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbr {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbs extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueData> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbs>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbt {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbu extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueItem> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbu>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbv {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbv>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbw extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaStatus> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbw>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbx extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaTrack> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbx>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzby extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzby>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzbz extends com.google.android.gms.cast.internal.zzai {
						public static class: java.lang.Class<com.google.android.gms.cast.zzbz>;
						public onAdBreakStatusUpdated(): void;
						public onQueueStatusUpdated(): void;
						public onPreloadStatusUpdated(): void;
						public onMetadataUpdated(): void;
						public onStatusUpdated(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakStatus> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzc>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzca extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzca>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcb extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcc extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcd extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzce extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzce>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcf extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcg extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzch extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzch>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzci extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzci>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcj extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzck extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzck>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcl extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcm extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcn extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzco extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzco>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcp extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcq extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcr extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcs extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcs>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzct extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzct>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcu extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcv extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcv>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcw extends com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcw>;
						public getCustomData(): org.json.JSONObject;
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcx extends com.google.android.gms.cast.internal.zzam {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcx>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcy extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzcz>*/ {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcy>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzcz {
						public static class: java.lang.Class<com.google.android.gms.cast.zzcz>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzcz>*/;
						public toJson(): org.json.JSONObject;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: number, param2: number, param3: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.ApplicationMetadata> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzd>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzda extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.TextTrackStyle> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzda>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzdb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VastAdsRequest> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzdb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzdc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VideoInfo> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzdc>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zze extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.cast.internal.zzn,com.google.android.gms.cast.Cast.CastOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzf extends com.google.android.gms.cast.Cast.zza {
						public static class: java.lang.Class<com.google.android.gms.cast.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzg extends com.google.android.gms.cast.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.cast.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzh extends com.google.android.gms.cast.Cast.zza {
						public static class: java.lang.Class<com.google.android.gms.cast.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzi extends com.google.android.gms.cast.Cast.zza {
						public static class: java.lang.Class<com.google.android.gms.cast.zzi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzj extends com.google.android.gms.cast.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.cast.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzk extends com.google.android.gms.cast.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.cast.zzk>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzl extends com.google.android.gms.cast.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.cast.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzm extends com.google.android.gms.cast.Cast.ApplicationConnectionResult {
						public static class: java.lang.Class<com.google.android.gms.cast.zzm>;
						public getWasLaunched(): boolean;
						public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						public getSessionId(): string;
						public getStatus(): com.google.android.gms.common.api.Status;
						public getApplicationStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzn extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.cast.Cast.CastOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzn>;
						/**
						 * Constructs a new instance of the com.google.android.gms.cast.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.cast.zzp*/): void;
							zzb(): com.google.android.gms.tasks.Task<java.lang.Void>;
							zzc(): com.google.android.gms.tasks.Task<java.lang.Void>;
							zzd(): com.google.android.gms.tasks.Task<java.lang.Void>;
							zza(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
							zza(param0: string, param1: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.tasks.Task<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							zzb(param0: string, param1: string): com.google.android.gms.tasks.Task<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
							zza(param0: string): com.google.android.gms.tasks.Task<com.google.android.gms.common.api.Status>;
							zza(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
							getVolume(): number;
							zza(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
							isMute(): boolean;
							getActiveInputState(): number;
							getStandbyState(): number;
							getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
							getApplicationStatus(): string;
							zza(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
							zzb(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
						});
						public constructor();
						public isMute(): boolean;
						public getActiveInputState(): number;
						public getStandbyState(): number;
						public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						public getVolume(): number;
						public getApplicationStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.cast.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzp {
						public static class: java.lang.Class<com.google.android.gms.cast.zzp>;
						public onConnectionSuspended(param0: number): void;
						public constructor();
						public onConnected(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.CastDevice> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzq>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzr extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.cast.zzdj,com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzs extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.cast.zzdg,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzs>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzt extends com.google.android.gms.cast.CastRemoteDisplayClient.zza {
						public static class: java.lang.Class<com.google.android.gms.cast.zzt>;
						public onDisconnected(): void;
						public onError(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzu extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.cast.zzdg,globalAndroid.view.Display> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzv extends com.google.android.gms.cast.CastRemoteDisplayClient.zza {
						public static class: java.lang.Class<com.google.android.gms.cast.zzv>;
						public onDisconnected(): void;
						public onError(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzw extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.cast.zzdg,java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.cast.zzw>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzx {
						public static class: java.lang.Class<com.google.android.gms.cast.zzx>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzy extends androidx.mediarouter.media.MediaRouter.Callback {
						public static class: java.lang.Class<com.google.android.gms.cast.zzy>;
						public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
						public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module cast {
					export class zzz {
						public static class: java.lang.Class<com.google.android.gms.cast.zzz>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zza>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaa extends com.google.android.gms.cast.zzp {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaa>;
							public onConnected(): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzab>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.Cast.CastOptions, param2: any /* com.google.android.gms.cast.zzp*/): any /* com.google.android.gms.cast.zzn*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzac extends com.google.android.gms.internal.cast.zzq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzac>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzad extends com.google.android.gms.cast.Cast.ApplicationConnectionResult {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzad>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public getSessionId(): string;
							public getWasLaunched(): boolean;
							public getApplicationStatus(): string;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzae {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaf extends com.google.android.gms.internal.cast.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzag>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.cast.framework.CastOptions, param2: any /* com.google.android.gms.internal.cast.zzai*/, param3: java.util.Map): any /* com.google.android.gms.cast.framework.zzh*/;
								zza(param0: string, param1: string, param2: any /* com.google.android.gms.cast.framework.zzz*/): any /* com.google.android.gms.cast.framework.zzs*/;
								zza(param0: com.google.android.gms.cast.framework.CastOptions, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: any /* com.google.android.gms.cast.framework.zzf*/): any /* com.google.android.gms.cast.framework.zzk*/;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: com.google.android.gms.dynamic.IObjectWrapper): any /* com.google.android.gms.cast.framework.zzp*/;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.cast.framework.media.internal.zzi*/, param2: number, param3: number, param4: boolean, param5: number, param6: number, param7: number, param8: number): any /* com.google.android.gms.cast.framework.media.internal.zzh*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzah extends com.google.android.gms.cast.framework.SessionProvider {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzah>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.framework.CastOptions, param2: any /* com.google.android.gms.internal.cast.zzax*/);
							public isSessionRecoverable(): boolean;
							public createSession(param0: string): com.google.android.gms.cast.framework.Session;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzai>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzai interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzac(): number;
								zza(param0: globalAndroid.os.Bundle, param1: any /* com.google.android.gms.internal.cast.zzak*/): void;
								zza(param0: globalAndroid.os.Bundle, param1: number): void;
								zze(param0: globalAndroid.os.Bundle): void;
								zzb(param0: globalAndroid.os.Bundle, param1: number): boolean;
								zzt(param0: string): void;
								zzbe(): void;
								zzbf(): boolean;
								zzu(param0: string): globalAndroid.os.Bundle;
								zzbg(): string;
								zzbh(): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaj extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzak {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzak>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: string, param1: globalAndroid.os.Bundle): void;
								zzb(param0: string, param1: globalAndroid.os.Bundle): void;
								zzc(param0: string, param1: globalAndroid.os.Bundle): void;
								zzd(param0: string, param1: globalAndroid.os.Bundle): void;
								zza(param0: string, param1: globalAndroid.os.Bundle, param2: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzal extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzal>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzam implements com.google.android.gms.cast.framework.IntroductoryOverlay {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzam>;
							public constructor(param0: com.google.android.gms.cast.framework.IntroductoryOverlay.Builder);
							public show(): void;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzan extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzak {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzan>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzao>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzap extends com.google.android.gms.cast.framework.internal.featurehighlight.zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzap>;
							public dismiss(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaq implements com.google.android.gms.cast.framework.IntroductoryOverlay {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaq>;
							public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
							public onDetachedFromWindow(): void;
							public constructor(param0: com.google.android.gms.cast.framework.IntroductoryOverlay.Builder);
							public show(): void;
							public remove(): void;
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzar>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzas {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzas>;
							public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzat>;
							public onClick(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzau extends androidx.mediarouter.media.MediaRouter.Callback {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzau>;
							public constructor();
							public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
							public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
							public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
							public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo, param2: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzak*/);
							public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
							public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzav {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzav>;
							public x: number;
							public y: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzax extends com.google.android.gms.internal.cast.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzax>;
							public constructor();
							public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
							public constructor(param0: string);
							public constructor(param0: androidx.mediarouter.media.MediaRouter);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzay {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzay>;
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzaz {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaz>;
							public onSuccess(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzb>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzba<R, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzba<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzba<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T): R;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbb<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbb<any>>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbc extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbc>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public constructor(param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar, param1: number, param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbd extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbd>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbe extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbe>;
							public constructor();
							public onSessionEnded(): void;
							public constructor(param0: globalAndroid.view.View, param1: globalAndroid.content.Context);
							public onSendingRemoteMediaRequest(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbf extends com.google.android.gms.cast.framework.media.internal.zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbg extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbg>;
							public constructor();
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context, param2: com.google.android.gms.cast.framework.media.ImageHints, param3: number);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbh extends com.google.android.gms.cast.framework.media.internal.zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbi extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbi>;
							public constructor();
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context, param2: com.google.android.gms.cast.framework.media.ImageHints, param3: number, param4: globalAndroid.view.View);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbj extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbj>;
							public constructor();
							public constructor(param0: globalAndroid.view.View);
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbk extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbk>;
							public constructor();
							public constructor(param0: globalAndroid.view.View);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbl extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbl>;
							public constructor();
							public constructor(param0: globalAndroid.widget.TextView, param1: java.util.List<string>);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbm extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbm>;
							public constructor();
							public constructor(param0: globalAndroid.widget.TextView, param1: java.util.List<string>);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbn extends com.google.android.gms.cast.Cast.Listener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbn>;
							public onVolumeChanged(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbo extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbo>;
							public constructor();
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbp extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbp>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.widget.ProgressBar, param1: number);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbq extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbq>;
							public constructor();
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable, param4: globalAndroid.graphics.drawable.Drawable, param5: globalAndroid.view.View, param6: boolean);
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbr extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbr>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.widget.SeekBar, param1: number, param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbs extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbs>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbt extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbt>;
							public constructor();
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public constructor(param0: globalAndroid.view.View, param1: number);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbu>;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbv extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbv>;
							public constructor();
							public constructor(param0: globalAndroid.widget.TextView);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbw extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbw>;
							public constructor();
							public onSessionEnded(): void;
							public onSendingRemoteMediaRequest(): void;
							public constructor(param0: globalAndroid.view.View, param1: number);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbx extends com.google.android.gms.internal.cast.zzca implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbx>;
							public constructor();
							public constructor(param0: globalAndroid.widget.TextView, param1: number, param2: string);
							public onProgressUpdated(param0: number, param1: number): void;
							public isAttached(): boolean;
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzby extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzby>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.widget.TextView, param1: string, param2: globalAndroid.view.View);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzbz extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbz>;
							public constructor();
							public onSessionEnded(): void;
							public constructor(param0: globalAndroid.view.View, param1: number);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzca extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzca>;
							public constructor();
							public isAttached(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcb extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcb>;
							public constructor();
							public onSessionEnded(): void;
							public constructor(param0: globalAndroid.view.View, param1: number);
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcc extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcc>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcd extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcd>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.widget.TextView, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzce extends com.google.android.gms.internal.cast.zzca {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzce>;
							public constructor();
							public constructor(param0: globalAndroid.widget.RelativeLayout, param1: com.google.android.gms.cast.framework.media.widget.CastSeekBar, param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcf extends com.google.android.gms.cast.framework.media.uicontroller.UIController implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcf>;
							public constructor();
							public onProgressUpdated(param0: number, param1: number): void;
							public onSessionEnded(): void;
							public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
							public constructor(param0: globalAndroid.widget.TextView, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zzb*/);
							public onMediaStatusUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcg extends com.google.android.gms.internal.cast.zzco {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcg>;
							public execute(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzch extends com.google.android.gms.cast.internal.zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzch>;
							public sendGameMessage(param0: string, param1: org.json.JSONObject): void;
							public dispose(): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.Cast.CastApi);
							public constructor(param0: string, param1: string, param2: string);
							public getCurrentState(): com.google.android.gms.cast.games.GameManagerState;
							public setListener(param0: com.google.android.gms.cast.games.GameManagerClient.Listener): void;
							public isDisposed(): boolean;
							public getLastUsedPlayerId(): string;
							public sendGameRequest(param0: string, param1: org.json.JSONObject): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzci extends com.google.android.gms.internal.cast.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzci>;
							public execute(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcj extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcj>;
							public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzck extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzck>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcl extends com.google.android.gms.internal.cast.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcl>;
							public execute(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcm extends com.google.android.gms.cast.internal.zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzcn extends com.google.android.gms.internal.cast.zzcp<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcn>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzch*/);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzco extends com.google.android.gms.internal.cast.zzcp<com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzco>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzch*/);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzch*/, param1: com.google.android.gms.cast.games.GameManagerClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzcp<R>  extends java.lang.Object /* com.google.android.gms.cast.internal.zzd<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcp<any>>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzch*/);
							public execute(): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcq extends com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcq>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcr extends com.google.android.gms.cast.internal.zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcs {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcs>;
							public constructor(param0: org.json.JSONObject);
							public getMaxPlayers(): number;
							public getVersion(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzct extends com.google.android.gms.cast.games.GameManagerClient.GameManagerResult {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzct>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public getRequestId(): number;
							public getExtraMessageData(): org.json.JSONObject;
							public getPlayerId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcu extends com.google.android.gms.cast.games.GameManagerState {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcu>;
							public hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
							public hashCode(): number;
							public getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getGameplayState(): number;
							public getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
							public hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public constructor(param0: number, param1: number, param2: string, param3: org.json.JSONObject, param4: java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>, param5: string, param6: number);
							public getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public getGameData(): org.json.JSONObject;
							public getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
							public getGameStatusText(): string;
							public getApplicationName(): string;
							public getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public getLobbyState(): number;
							public getMaxPlayers(): number;
							public hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
							public hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
							public equals(param0: any): boolean;
							public hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
							public hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcv {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcw>;
							public getPlayerState(): number;
							public constructor(param0: org.json.JSONObject);
							public getPlayerData(): org.json.JSONObject;
							public getPlayerId(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcx extends com.google.android.gms.cast.games.PlayerInfo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcx>;
							public getPlayerState(): number;
							public getPlayerData(): org.json.JSONObject;
							public hashCode(): number;
							public isConnected(): boolean;
							public isControllable(): boolean;
							public getPlayerId(): string;
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: number, param2: org.json.JSONObject, param3: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcy extends com.google.android.gms.internal.cast.zzdo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzcz extends com.google.android.gms.cast.CastRemoteDisplayApi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcz>;
							public constructor(param0: com.google.android.gms.common.api.Api);
							public stopRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
							public startRemoteDisplay(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzd>;
							public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzda extends com.google.android.gms.internal.cast.zzdc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzda>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdb extends com.google.android.gms.internal.cast.zzdc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdc extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult,com.google.android.gms.internal.cast.zzdj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdc>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzcz*/, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdd extends com.google.android.gms.internal.cast.zzdk {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdd>;
							public onError(param0: number): void;
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzde extends com.google.android.gms.internal.cast.zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzde>;
							public constructor();
							public onError(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzdc*/);
							public constructor(param0: string);
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdf extends com.google.android.gms.internal.cast.zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdf>;
							public constructor();
							public onError(param0: number): void;
							public constructor(param0: string);
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzdc*/, param1: any /* com.google.android.gms.internal.cast.zzdj*/);
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdg extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzdn>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdg>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public getServiceDescriptor(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdh extends com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdh>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public constructor(param0: globalAndroid.view.Display);
							public getPresentationDisplay(): globalAndroid.view.Display;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdi extends com.google.android.gms.internal.cast.zzdo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdj extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzdn>*/ implements globalAndroid.os.IBinder.DeathRecipient  {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdj>;
							public disconnect(): void;
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public binderDied(): void;
							public getServiceDescriptor(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.cast.CastDevice, param4: globalAndroid.os.Bundle, param5: com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzdk extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzdl {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdk>;
							public constructor();
							public onError(param0: number): void;
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdl {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzdl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: number, param2: globalAndroid.view.Surface): void;
								onError(param0: number): void;
								onDisconnected(): void;
								zzh(): void;
							});
							public constructor();
							public onError(param0: number): void;
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdm extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzdn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdm>;
							public disconnect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzdn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								disconnect(): void;
								zza(param0: any /* com.google.android.gms.internal.cast.zzdl*/, param1: any /* com.google.android.gms.internal.cast.zzdp*/, param2: string, param3: string, param4: globalAndroid.os.Bundle): void;
								zza(param0: any /* com.google.android.gms.internal.cast.zzdl*/, param1: globalAndroid.app.PendingIntent, param2: string, param3: string, param4: globalAndroid.os.Bundle): void;
								zza(param0: any /* com.google.android.gms.internal.cast.zzdl*/, param1: number): void;
								zza(param0: any /* com.google.android.gms.internal.cast.zzdl*/): void;
							});
							public constructor();
							public disconnect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzdo extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzdp {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdo>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdp {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzdp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzad(param0: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzdq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdr {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdr>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public dispatchMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzds extends com.google.android.gms.internal.cast.zzdt {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzds>;
							public animator: globalAndroid.animation.Animator;
							public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdt {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdt>;
							public constructor();
							public onAnimationStart(param0: globalAndroid.animation.Animator): void;
							public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzdu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdu>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdv extends com.google.android.gms.internal.cast.zzdw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdv>;
							public doFrame(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzdw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdw>;
							public constructor();
							public doFrame(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdx extends java.lang.Object /* java.lang.ThreadLocal<com.google.android.gms.internal.cast.zzdu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdy {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdy>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzdz {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdz>;
							public doFrame(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzea extends com.google.android.gms.internal.cast.zzdu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzea>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzeb extends com.google.android.gms.internal.cast.zzdu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeb>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzec {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzec>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzed {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzed>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzee {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzee>;
							public static checkNotNull(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzef {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzef>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzeg<T>  extends java.io.Serializable {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeg<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzeh<T>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzeg<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeh<any>>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzei {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei>;
						}
						export module zzei {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzei.zza,com.google.android.gms.internal.cast.zzei.zza.zzd>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zzc>*/;
									public toString(): string;
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzei.zza,com.google.android.gms.internal.cast.zzei.zza.zzd>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zzd>;
									public isInitialized(): boolean;
								}
								export class zze extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zze>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zze>*/;
								}
								export class zzf extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zzf>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zzf>*/;
								}
								export class zzg extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zza.zzg>;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zza.zzg>*/;
									public toString(): string;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzei.zzb,com.google.android.gms.internal.cast.zzei.zzb.zzb>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zzb.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zzb.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzei.zzb,com.google.android.gms.internal.cast.zzei.zzb.zzb>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zzb.zzb>;
									public isInitialized(): boolean;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei.zzb.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzei.zzb.zzc>*/;
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzej<T>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzeg<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzej<any>>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzek {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzek>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzel extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzel>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzem extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzem>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzen extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzen>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzeo extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzep extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzep>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzeq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzer extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zze>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzes extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzes>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzet extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzet>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzeu extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zzf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzev extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zza.zzg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzev>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzew extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzew>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzex extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzex>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzey extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zzb.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzey>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzez extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzei.zzb.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzez>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfa extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfa>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfa>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfb extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfc extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfa>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfe extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzff>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzff extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzff>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzff>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfg extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfg>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfg>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfh extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfi extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfk extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfl extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfl>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfl>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfm extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfm>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfm>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfn extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfo extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfp extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfr extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfr>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfr>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfs extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfs>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfs>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzft extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzft>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfu extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfv extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfs>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfw extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfx extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfx>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfx>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfy extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfy>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzfy>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzfz extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzg>;
							public constructor(param0: globalAndroid.content.SharedPreferences, param1: any /* com.google.android.gms.internal.cast.zzf*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzga extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzga>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzfy>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgc extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgd>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgd>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzge extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzge>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzge>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgf extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgg extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgh extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzge>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgi extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgj>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgj>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgk extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgk>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgk>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgl extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgm extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgn extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgo extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgp extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgp>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgp>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgq>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgq>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgr extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgs extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgt extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgu extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgv extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgv>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgv>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgw extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgw>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzgw>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgx extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgy extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzgz extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzgw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzgz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzh extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzha extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzha>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhb>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhb>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhc extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhd>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhd>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhe extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhe>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhe>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhf extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhg extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhh extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhe>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhi extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhj>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhj>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhk extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhk>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhk>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhl extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhm extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhn extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzho extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzho>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhp extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhp>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhp>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhq>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhq>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhr extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhs extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzht extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzht>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhu extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhv extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhv>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhv>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhw extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhw>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzhw>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhx extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhy extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzhz extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzhw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzhz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzia extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzib>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzia>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzib extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzib>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzib>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzic extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzic>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzic>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzid extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzid>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzie extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzie>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzif extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzic>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzif>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzig extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzih>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzig>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzih extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzih>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzih>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzii extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzii>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzii>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzij extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzij>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzik extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzik>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzil extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzii>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzil>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzim extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzin>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzim>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzin extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzin>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzin>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzio extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzio>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzio>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzip extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzip>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziq extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzir extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzio>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzir>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzis extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzit>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzis>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzit extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzit>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzit>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziu extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziu>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zziu>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziv extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziw extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzix extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zziu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzix>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziy extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zziz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zziz extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zziz>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zziz>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzj>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzja extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzja>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzja>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjb extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjc extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzja>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzje extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzjf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzje>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjf extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjf>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzjf>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjg extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjg>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzjg>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjh extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzji extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzji>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzjg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjk extends java.lang.Object /* com.google.android.gms.internal.cast.zzlf<com.google.android.gms.internal.cast.zzjl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjl extends java.lang.Object /* com.google.android.gms.internal.cast.zzlg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjl>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzjl>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm>;
						}
						export module zzjm {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zza,com.google.android.gms.internal.cast.zzjm.zza.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zza,com.google.android.gms.internal.cast.zzjm.zza.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zza.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaa extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzaa,com.google.android.gms.internal.cast.zzjm.zzaa.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaa>;
								public isInitialized(): boolean;
							}
							export module zzaa {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzaa,com.google.android.gms.internal.cast.zzjm.zzaa.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaa.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzab extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzab,com.google.android.gms.internal.cast.zzjm.zzab.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzab>;
								public isInitialized(): boolean;
							}
							export module zzab {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzab,com.google.android.gms.internal.cast.zzjm.zzab.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzab.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzac extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzac,com.google.android.gms.internal.cast.zzjm.zzac.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzac>;
								public isInitialized(): boolean;
							}
							export module zzac {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzac,com.google.android.gms.internal.cast.zzjm.zzac.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzac.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzad extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzad,com.google.android.gms.internal.cast.zzjm.zzad.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzad>;
								public isInitialized(): boolean;
							}
							export module zzad {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzad,com.google.android.gms.internal.cast.zzjm.zzad.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzad.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzae extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzae,com.google.android.gms.internal.cast.zzjm.zzae.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzae>;
								public isInitialized(): boolean;
							}
							export module zzae {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzae,com.google.android.gms.internal.cast.zzjm.zzae.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzae.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaf extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzaf,com.google.android.gms.internal.cast.zzjm.zzaf.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaf>;
								public isInitialized(): boolean;
							}
							export module zzaf {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzaf,com.google.android.gms.internal.cast.zzjm.zzaf.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaf.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzag extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzag,com.google.android.gms.internal.cast.zzjm.zzag.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzag>;
								public isInitialized(): boolean;
							}
							export module zzag {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzag,com.google.android.gms.internal.cast.zzjm.zzag.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzag.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzah extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzah,com.google.android.gms.internal.cast.zzjm.zzah.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzah>;
								public isInitialized(): boolean;
							}
							export module zzah {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzah,com.google.android.gms.internal.cast.zzjm.zzah.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzah.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzai extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzai,com.google.android.gms.internal.cast.zzjm.zzai.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzai>;
								public isInitialized(): boolean;
							}
							export module zzai {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzai,com.google.android.gms.internal.cast.zzjm.zzai.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzai.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzaj,com.google.android.gms.internal.cast.zzjm.zzaj.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaj>;
								public isInitialized(): boolean;
							}
							export module zzaj {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzaj,com.google.android.gms.internal.cast.zzjm.zzaj.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzaj.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzak extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzak,com.google.android.gms.internal.cast.zzjm.zzak.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzak>;
								public isInitialized(): boolean;
							}
							export module zzak {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzak,com.google.android.gms.internal.cast.zzjm.zzak.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzak.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzal extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzal,com.google.android.gms.internal.cast.zzjm.zzal.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzal>;
								public isInitialized(): boolean;
							}
							export module zzal {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzal,com.google.android.gms.internal.cast.zzjm.zzal.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzal.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzam extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzam,com.google.android.gms.internal.cast.zzjm.zzam.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzam>;
								public isInitialized(): boolean;
							}
							export module zzam {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzam,com.google.android.gms.internal.cast.zzjm.zzam.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzam.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzb,com.google.android.gms.internal.cast.zzjm.zzb.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzb,com.google.android.gms.internal.cast.zzjm.zzb.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzb.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzc,com.google.android.gms.internal.cast.zzjm.zzc.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzc>;
								public isInitialized(): boolean;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzc,com.google.android.gms.internal.cast.zzjm.zzc.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzc.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzd,com.google.android.gms.internal.cast.zzjm.zzd.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzd>;
								public isInitialized(): boolean;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzd,com.google.android.gms.internal.cast.zzjm.zzd.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzd.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zze,com.google.android.gms.internal.cast.zzjm.zze.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zze>;
								public isInitialized(): boolean;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zze,com.google.android.gms.internal.cast.zzjm.zze.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zze.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzf,com.google.android.gms.internal.cast.zzjm.zzf.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzf>;
								public isInitialized(): boolean;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzf,com.google.android.gms.internal.cast.zzjm.zzf.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzf.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzg,com.google.android.gms.internal.cast.zzjm.zzg.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzg>;
								public isInitialized(): boolean;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzg,com.google.android.gms.internal.cast.zzjm.zzg.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzg.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzh,com.google.android.gms.internal.cast.zzjm.zzh.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzh>;
								public isInitialized(): boolean;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzh,com.google.android.gms.internal.cast.zzjm.zzh.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzh.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzi,com.google.android.gms.internal.cast.zzjm.zzi.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzi>;
								public isInitialized(): boolean;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzi,com.google.android.gms.internal.cast.zzjm.zzi.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzi.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzj,com.google.android.gms.internal.cast.zzjm.zzj.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzj>;
								public isInitialized(): boolean;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzj,com.google.android.gms.internal.cast.zzjm.zzj.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzj.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzk,com.google.android.gms.internal.cast.zzjm.zzk.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzk>;
								public isInitialized(): boolean;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzk,com.google.android.gms.internal.cast.zzjm.zzk.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzk.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzl,com.google.android.gms.internal.cast.zzjm.zzl.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzl>;
								public isInitialized(): boolean;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzl,com.google.android.gms.internal.cast.zzjm.zzl.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzl.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzm,com.google.android.gms.internal.cast.zzjm.zzm.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzm>;
								public isInitialized(): boolean;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzm,com.google.android.gms.internal.cast.zzjm.zzm.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzm.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzn extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzn,com.google.android.gms.internal.cast.zzjm.zzn.zzb>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzn>;
								public isInitialized(): boolean;
							}
							export module zzn {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzn.zza,com.google.android.gms.internal.cast.zzjm.zzn.zza.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzn.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzn.zza,com.google.android.gms.internal.cast.zzjm.zzn.zza.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzn.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzn,com.google.android.gms.internal.cast.zzjm.zzn.zzb>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzn.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzo extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzo,com.google.android.gms.internal.cast.zzjm.zzo.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzo>;
								public isInitialized(): boolean;
							}
							export module zzo {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzo,com.google.android.gms.internal.cast.zzjm.zzo.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzo.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzp extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzp,com.google.android.gms.internal.cast.zzjm.zzp.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzp>;
								public isInitialized(): boolean;
							}
							export module zzp {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzp,com.google.android.gms.internal.cast.zzjm.zzp.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzp.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzq,com.google.android.gms.internal.cast.zzjm.zzq.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzq>;
								public isInitialized(): boolean;
							}
							export module zzq {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzq,com.google.android.gms.internal.cast.zzjm.zzq.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzq.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzr extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzr,com.google.android.gms.internal.cast.zzjm.zzr.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzr>;
								public isInitialized(): boolean;
							}
							export module zzr {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzr,com.google.android.gms.internal.cast.zzjm.zzr.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzr.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzs extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzs,com.google.android.gms.internal.cast.zzjm.zzs.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzs>;
								public isInitialized(): boolean;
							}
							export module zzs {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzs,com.google.android.gms.internal.cast.zzjm.zzs.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzs.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzt extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzt,com.google.android.gms.internal.cast.zzjm.zzt.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzt>;
								public isInitialized(): boolean;
							}
							export module zzt {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzt,com.google.android.gms.internal.cast.zzjm.zzt.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzt.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzu extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzu,com.google.android.gms.internal.cast.zzjm.zzu.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzu>;
								public isInitialized(): boolean;
							}
							export module zzu {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzu,com.google.android.gms.internal.cast.zzjm.zzu.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzu.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzv extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzv,com.google.android.gms.internal.cast.zzjm.zzv.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzv>;
								public isInitialized(): boolean;
							}
							export module zzv {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzv,com.google.android.gms.internal.cast.zzjm.zzv.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzv.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzw extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzw,com.google.android.gms.internal.cast.zzjm.zzw.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzw>;
								public isInitialized(): boolean;
							}
							export module zzw {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzw,com.google.android.gms.internal.cast.zzjm.zzw.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzw.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzx extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzx,com.google.android.gms.internal.cast.zzjm.zzx.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzx>;
								public isInitialized(): boolean;
							}
							export module zzx {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzx,com.google.android.gms.internal.cast.zzjm.zzx.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzx.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzy extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzy,com.google.android.gms.internal.cast.zzjm.zzy.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzy>;
								public isInitialized(): boolean;
							}
							export module zzy {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzy,com.google.android.gms.internal.cast.zzjm.zzy.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzy.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzz extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<com.google.android.gms.internal.cast.zzjm.zzz,com.google.android.gms.internal.cast.zzjm.zzz.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzz>;
								public isInitialized(): boolean;
							}
							export module zzz {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc.zza<com.google.android.gms.internal.cast.zzjm.zzz,com.google.android.gms.internal.cast.zzjm.zzz.zza>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjm.zzz.zza>;
									public isInitialized(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjn extends com.google.android.gms.internal.cast.zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjp extends java.lang.Object /* com.google.android.gms.internal.cast.zzlk<java.lang.Integer,com.google.android.gms.internal.cast.zzjg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjq extends java.lang.Object /* com.google.android.gms.internal.cast.zzlk<java.lang.Integer,com.google.android.gms.internal.cast.zzjg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjr extends java.lang.Object /* com.google.android.gms.internal.cast.zzlk<java.lang.Integer,com.google.android.gms.internal.cast.zzja>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjs<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzmo*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjs<any,any>>;
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjt<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzml*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjt<any,any>>;
							public constructor();
							public isInitialized(): boolean;
							public toByteArray(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzju<MessageType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzmv<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzju<any>>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjv extends com.google.android.gms.internal.cast.zzmr {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjv>;
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzjw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjx<E>  extends java.util.AbstractList<any> implements any /* com.google.android.gms.internal.cast.zzlm<any>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjx<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public clear(): void;
							public equals(param0: any): boolean;
							public addAll(param0: java.util.Collection<any>): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjy extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjy>;
							public size(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzjz {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzjz>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzka extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.cast.zzjy>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzka>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkb extends com.google.android.gms.internal.cast.zzkd {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkb>;
							public nextByte(): number;
							public hasNext(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzkd extends com.google.android.gms.internal.cast.zzkh {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkd>;
							public nextByte(): number;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzke {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzke>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzke interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkf extends com.google.android.gms.internal.cast.zzki {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkf>;
							public size(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkg {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkh extends java.util.Iterator<java.lang.Byte> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzkh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nextByte(): number;
							});
							public constructor();
							public nextByte(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzki extends com.google.android.gms.internal.cast.zzkj {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzki>;
							public size(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzkj extends com.google.android.gms.internal.cast.zzjy {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzkk {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkl {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkm extends com.google.android.gms.internal.cast.zzkk {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzko {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzko>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzkp extends com.google.android.gms.internal.cast.zzjz {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkp>;
						}
						export module zzkp {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkp.zza>;
							}
							export class zzb extends com.google.android.gms.internal.cast.zzkp {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkp.zzb>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkr extends com.google.android.gms.internal.cast.zzon {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzks extends java.lang.Object /* com.google.android.gms.internal.cast.zzkt<com.google.android.gms.internal.cast.zzlc.zze>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzks>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzkt<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkt<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzku<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzku<any>>;
							public hashCode(): number;
							public iterator(): java.util.Iterator<java.util.Map.Entry<T,any>>;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
							public isImmutable(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkv {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkw<T>  extends java.lang.Comparable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkw<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzkw<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzfw(): number;
								zziu(): any /* com.google.android.gms.internal.cast.zzoi*/;
								zziv(): any /* com.google.android.gms.internal.cast.zzol*/;
								zziw(): boolean;
								zzix(): boolean;
								zza(param0: any /* com.google.android.gms.internal.cast.zzmo*/, param1: any /* com.google.android.gms.internal.cast.zzml*/): any /* com.google.android.gms.internal.cast.zzmo*/;
								zza(param0: any /* com.google.android.gms.internal.cast.zzmr*/, param1: any /* com.google.android.gms.internal.cast.zzmr*/): any /* com.google.android.gms.internal.cast.zzmr*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkx {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzky {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzky>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzkz {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzkz>;
							public id(): number;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzkz>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzl extends com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.CastSession> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzl>;
							public onSessionEnded(param0: any, param1: number): void;
							public onSessionResuming(param0: any, param1: string): void;
							public onSessionStarted(param0: any, param1: string): void;
							public onSessionEnding(param0: any): void;
							public onSessionStartFailed(param0: any, param1: number): void;
							public onSessionResumeFailed(param0: any, param1: number): void;
							public onSessionSuspended(param0: any, param1: number): void;
							public onSessionStarting(param0: any): void;
							public onSessionResumed(param0: any, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzla extends com.google.android.gms.internal.cast.zzmm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzla>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlb {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlb>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzlb>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzlc<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzjt<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc<any,any>>;
							public constructor();
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
						}
						export module zzlc {
							export class zza<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzjs<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc.zza<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export abstract class zzb<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzlc<any,any>*/ implements any /* com.google.android.gms.internal.cast.zzmn*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc.zzb<any,any>>;
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzc<T>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzju<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc.zzc<any>>;
								public constructor(param0: any);
								public constructor();
							}
							export class zzd extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc.zzd>;
							}
							export class zze extends java.lang.Object /* com.google.android.gms.internal.cast.zzkw<com.google.android.gms.internal.cast.zzlc.zze>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlc.zze>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzld {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzld>;
							public static hashCode(param0: native.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzle extends com.google.android.gms.internal.cast.zzjx<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzle>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getInt(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlf<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlf<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlf<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlg {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzfw(): number;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlh extends com.google.android.gms.internal.cast.zzlm<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzbc(param0: number): void;
								zzbb(param0: number): any /* com.google.android.gms.internal.cast.zzlh*/;
								zzib(): void;
								zzia(): boolean;
								zzbf(param0: number): any /* com.google.android.gms.internal.cast.zzlm<any>*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzli {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzli>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzli interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlj extends com.google.android.gms.internal.cast.zzlm<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzib(): void;
								zzia(): boolean;
								zzbf(param0: number): any /* com.google.android.gms.internal.cast.zzlm<any>*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlk<F, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlk<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlk<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzll {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzll>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlm<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlm<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlm<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzib(): void;
								zzia(): boolean;
								zzbf(param0: number): any /* com.google.android.gms.internal.cast.zzlm<E>*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzln {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzln>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzln>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlo extends com.google.android.gms.internal.cast.zzll {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlo>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlp {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlq extends com.google.android.gms.internal.cast.zzlu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlq>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlr<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlr<any>>;
							public constructor(param0: java.util.Iterator<java.util.Map.Entry<any,any>>);
							public hasNext(): boolean;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzls<K>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzls<any>>;
							public getValue(): any;
							public getKey(): any;
							public setValue(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlt extends java.lang.Object /* com.google.android.gms.internal.cast.zzjx<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlt>;
							public constructor();
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public size(): number;
							public clear(): void;
							public constructor(param0: number);
							public addAll(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlu>;
							public constructor();
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzlv {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzlw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzbg(param0: number): any;
								zzjr(): java.util.List<any>;
								zzjs(): any /* com.google.android.gms.internal.cast.zzlw*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlx extends com.google.android.gms.internal.cast.zzlv {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzly {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzly>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzlz extends com.google.android.gms.internal.cast.zzjx<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzlz>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getLong(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzma extends com.google.android.gms.internal.cast.zzlv {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzma>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmb extends com.google.android.gms.internal.cast.zzmm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmc extends com.google.android.gms.internal.cast.zznb {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmd<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmd<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzme extends com.google.android.gms.internal.cast.zzmm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzme>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmf<K, V>  extends java.util.LinkedHashMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmf<any,any>>;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public hashCode(): number;
							public remove(param0: any): any;
							public clear(): void;
							public isMutable(): boolean;
							public put(param0: any, param1: any): any;
							public equals(param0: any): boolean;
							public putAll(param0: java.util.Map<any,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmg<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmg<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmh extends com.google.android.gms.internal.cast.zzmi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzj(param0: any): java.util.Map<any,any>;
								zzk(param0: any): any;
								zzi(param0: any): any /* com.google.android.gms.internal.cast.zzmg<any,any>*/;
								zzc(param0: any, param1: any): any;
								zzb(param0: number, param1: any, param2: any): number;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmj {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzjz(): number;
								zzka(): boolean;
								zzkb(): any /* com.google.android.gms.internal.cast.zzml*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmk {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzml extends com.google.android.gms.internal.cast.zzmn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzml>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzml interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.cast.zzkp*/): void;
								zzjg(): number;
								zzhv(): any /* com.google.android.gms.internal.cast.zzjy*/;
								zzjk(): any /* com.google.android.gms.internal.cast.zzmo*/;
								zzje(): any /* com.google.android.gms.internal.cast.zzml*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmm {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.lang.Class<any>): boolean;
								zzb(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.cast.zzmj*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzje(): any /* com.google.android.gms.internal.cast.zzml*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmo extends com.google.android.gms.internal.cast.zzmn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzjd(): any /* com.google.android.gms.internal.cast.zzml*/;
								zzjc(): any /* com.google.android.gms.internal.cast.zzml*/;
								zza(param0: any /* com.google.android.gms.internal.cast.zzml*/): any /* com.google.android.gms.internal.cast.zzmo*/;
								zzje(): any /* com.google.android.gms.internal.cast.zzml*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmp<T>  extends java.lang.Object /* com.google.android.gms.internal.cast.zznc<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmp<any>>;
							public hashCode(param0: any): number;
							public equals(param0: any, param1: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmr extends com.google.android.gms.internal.cast.zzml {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzhx(): any /* com.google.android.gms.internal.cast.zzmr*/;
								zzb(param0: any /* com.google.android.gms.internal.cast.zzkp*/): void;
								zzjg(): number;
								zzhv(): any /* com.google.android.gms.internal.cast.zzjy*/;
								zzjk(): any /* com.google.android.gms.internal.cast.zzmo*/;
								zzje(): any /* com.google.android.gms.internal.cast.zzml*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzms<T>  extends java.lang.Object /* com.google.android.gms.internal.cast.zznc<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzms<any>>;
							public hashCode(param0: any): number;
							public equals(param0: any, param1: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmt extends com.google.android.gms.internal.cast.zzmu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmu {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmv<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmv<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmv<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmw {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmx {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmy {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzmy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzmz extends com.google.android.gms.internal.cast.zzmj {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzmz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzn {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzna<E>  extends java.lang.Object /* com.google.android.gms.internal.cast.zzjx<any>*/ implements java.util.RandomAccess  {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzna<any>>;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public add(param0: number, param1: any): void;
							public get(param0: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznb {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zznb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: java.lang.Class): any /* com.google.android.gms.internal.cast.zznc<any>*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznc<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznc<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zznc<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T, param1: any /* com.google.android.gms.internal.cast.zzon*/): void;
								zze(param0: T): void;
								zzm(param0: T): boolean;
								equals(param0: T, param1: T): boolean;
								hashCode(param0: T): number;
								zzd(param0: T, param1: T): void;
								zzl(param0: T): number;
							});
							public constructor();
							public equals(param0: T, param1: T): boolean;
							public hashCode(param0: T): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznd<K, V>  extends java.util.AbstractMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznd<any,any>>;
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public equals(param0: any): boolean;
							public isImmutable(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzne {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzne>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznf extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznf>;
							public hasNext(): boolean;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzng extends java.lang.Object /* com.google.android.gms.internal.cast.zznd<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzng>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznh {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzni extends java.lang.Object /* com.google.android.gms.internal.cast.zzno*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzni>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznj extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznj>;
							public iterator(): java.util.Iterator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznk extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznk>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznl extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznl>;
							public hasNext(): boolean;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznm extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznm>;
							public getValue(): any;
							public hashCode(): number;
							public toString(): string;
							public setValue(param0: any): any;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznn extends com.google.android.gms.internal.cast.zzmj {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzno extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzno>;
							public contains(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public clear(): void;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznp extends com.google.android.gms.internal.cast.zzns {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznp>;
							public size(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznr {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznr>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzml*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzns {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzns>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								size(): number;
								zzai(param0: number): number;
							});
							public constructor();
							public size(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznt {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznt>;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zznu<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznu<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznv extends java.util.AbstractList<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznv>;
							public listIterator(param0: number): java.util.ListIterator<string>;
							public iterator(): java.util.Iterator<string>;
							public size(): number;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzlw*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznw extends java.lang.Object /* com.google.android.gms.internal.cast.zznu<com.google.android.gms.internal.cast.zznt,com.google.android.gms.internal.cast.zznt>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznx extends java.util.Iterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznx>;
							public hasNext(): boolean;
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzny extends java.util.ListIterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzny>;
							public previousIndex(): number;
							public nextIndex(): number;
							public hasNext(): boolean;
							public remove(): void;
							public hasPrevious(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zznz extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zznz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								connect(): void;
								disconnect(): void;
								requestStatus(): void;
								getActiveInputState(): number;
								getStandbyState(): number;
								getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
								getApplicationStatus(): string;
								setVolume(param0: number): void;
								getVolume(): number;
								setMute(param0: boolean): void;
								isMute(): boolean;
								setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
								removeMessageReceivedCallbacks(param0: string): void;
								sendMessage(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								zzf(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								zzc(param0: string, param1: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
								zzn(param0: string): void;
							});
							public constructor();
							public setVolume(param0: number): void;
							public disconnect(): void;
							public getVolume(): number;
							public sendMessage(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
							public requestStatus(): void;
							public isMute(): boolean;
							public removeMessageReceivedCallbacks(param0: string): void;
							public setMute(param0: boolean): void;
							public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
							public getStandbyState(): number;
							public connect(): void;
							public getApplicationStatus(): string;
							public getActiveInputState(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoa {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoa>;
						}
						export module zzoa {
							export class zza extends com.google.android.gms.internal.cast.zzoa.zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoa.zza>;
							}
							export class zzb extends com.google.android.gms.internal.cast.zzoa.zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoa.zzb>;
							}
							export abstract class zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoa.zzc>;
							}
							export class zzd extends com.google.android.gms.internal.cast.zzoa.zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoa.zzd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export abstract class zzob {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzob>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoc {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzod {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoe extends com.google.android.gms.internal.cast.zzob {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzof {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzof>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzog extends com.google.android.gms.internal.cast.zzob {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoh extends com.google.android.gms.internal.cast.zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoi>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzoi>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzoj extends com.google.android.gms.internal.cast.zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzoj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzok extends com.google.android.gms.internal.cast.zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzok>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzol {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzol>;
							public static values(): any /* native.Array<com.google.android.gms.internal.cast.zzol>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzom extends com.google.android.gms.internal.cast.zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzom>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzon {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzon>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzon interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzio(): number;
								zzo(param0: number, param1: number): void;
								zzi(param0: number, param1: number): void;
								zzj(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzp(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zze(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzh(param0: number, param1: number): void;
								zzb(param0: number, param1: boolean): void;
								zzb(param0: number, param1: string): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.cast.zzjy*/): void;
								zzf(param0: number, param1: number): void;
								zzg(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zza(param0: number, param1: any, param2: any /* com.google.android.gms.internal.cast.zznc<any>*/): void;
								zzb(param0: number, param1: any, param2: any /* com.google.android.gms.internal.cast.zznc<any>*/): void;
								zzaz(param0: number): void;
								zzba(param0: number): void;
								zza(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzb(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzc(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzd(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zze(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzf(param0: number, param1: java.util.List<java.lang.Float>, param2: boolean): void;
								zzg(param0: number, param1: java.util.List<java.lang.Double>, param2: boolean): void;
								zzh(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzi(param0: number, param1: java.util.List<java.lang.Boolean>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<string>): void;
								zzb(param0: number, param1: any /* java.util.List<com.google.android.gms.internal.cast.zzjy>*/): void;
								zzj(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzk(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzl(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzm(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzn(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.cast.zznc<any>*/): void;
								zzb(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.cast.zznc<any>*/): void;
								zzb(param0: number, param1: any): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.cast.zzmg<any,any>*/, param2: java.util.Map): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzp>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzq {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.CastDevice, param2: com.google.android.gms.cast.framework.CastOptions, param3: com.google.android.gms.cast.Cast.Listener, param4: any /* com.google.android.gms.internal.cast.zzr*/): any /* com.google.android.gms.internal.cast.zzo*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.cast.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(param0: globalAndroid.os.Bundle): void;
								zzr(param0: number): void;
								onConnectionSuspended(param0: number): void;
							});
							public constructor();
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzs extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzt extends com.google.android.gms.internal.cast.zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzt>;
							public setVolume(param0: number): void;
							public disconnect(): void;
							public getVolume(): number;
							public sendMessage(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public constructor(param0: any /* com.google.android.gms.internal.cast.zzab*/, param1: globalAndroid.content.Context, param2: com.google.android.gms.cast.CastDevice, param3: com.google.android.gms.cast.framework.CastOptions, param4: com.google.android.gms.cast.Cast.Listener, param5: any /* com.google.android.gms.internal.cast.zzr*/);
							public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
							public requestStatus(): void;
							public isMute(): boolean;
							public removeMessageReceivedCallbacks(param0: string): void;
							public setMute(param0: boolean): void;
							public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
							public getStandbyState(): number;
							public connect(): void;
							public getApplicationStatus(): string;
							public getActiveInputState(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzu extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzv extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzw extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzx extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module cast {
						export class zzz extends com.google.android.gms.internal.cast.zzba<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.cast.zzz>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy:1
//androidx.mediarouter.media.MediaRouterJellybean.VolumeCallbackProxy:1
//androidx.mediarouter.media.MediaRouterJellybeanMr1.CallbackProxy:1
//com.google.android.gms.cast.framework.SessionManagerListener:1
//com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter:1
//com.google.android.gms.cast.framework.zzad:1
//com.google.android.gms.cast.internal.zzd:1
//com.google.android.gms.internal.cast.zzba:2
//com.google.android.gms.internal.cast.zzbb:1
//com.google.android.gms.internal.cast.zzcp:1
//com.google.android.gms.internal.cast.zzeg:1
//com.google.android.gms.internal.cast.zzeh:1
//com.google.android.gms.internal.cast.zzej:1
//com.google.android.gms.internal.cast.zzjs:2
//com.google.android.gms.internal.cast.zzjt:2
//com.google.android.gms.internal.cast.zzju:1
//com.google.android.gms.internal.cast.zzjx:1
//com.google.android.gms.internal.cast.zzkt:1
//com.google.android.gms.internal.cast.zzku:1
//com.google.android.gms.internal.cast.zzkw:1
//com.google.android.gms.internal.cast.zzlc:2
//com.google.android.gms.internal.cast.zzlc.zza:2
//com.google.android.gms.internal.cast.zzlc.zzb:2
//com.google.android.gms.internal.cast.zzlc.zzc:1
//com.google.android.gms.internal.cast.zzlf:1
//com.google.android.gms.internal.cast.zzlk:2
//com.google.android.gms.internal.cast.zzlm:1
//com.google.android.gms.internal.cast.zzlr:1
//com.google.android.gms.internal.cast.zzls:1
//com.google.android.gms.internal.cast.zzmd:2
//com.google.android.gms.internal.cast.zzmf:2
//com.google.android.gms.internal.cast.zzmg:2
//com.google.android.gms.internal.cast.zzmp:1
//com.google.android.gms.internal.cast.zzms:1
//com.google.android.gms.internal.cast.zzmv:1
//com.google.android.gms.internal.cast.zzna:1
//com.google.android.gms.internal.cast.zznc:1
//com.google.android.gms.internal.cast.zznd:2
//com.google.android.gms.internal.cast.zznu:2

