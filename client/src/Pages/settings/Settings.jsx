import AccountSettings from "../../components/settings/AccountSettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import LanguageSettings from "../../components/settings/LanguageSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import LogoutCard from "../../components/settings/LogoutCard";

const Settings = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account preferences and application settings.
        </p>

      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-8">

        <AccountSettings />

        <AppearanceSettings />

        <NotificationSettings />

        <LanguageSettings />

        <PrivacySettings />

        <LogoutCard />

      </div>

    </div>

  );

};

export default Settings;